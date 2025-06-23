/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface User {
  full_name: string;
}
interface AuthTokens {
  access: string;
  refresh: string;
}

// Define the context type
interface AuthContextType {
  user: User | null;
  tokens: AuthTokens | null;
  setAuthData: (user: User, tokens: AuthTokens) => void;
  logout: () => void;
}

// Create the context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// The Provider Component
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [tokens, setTokens] = useState<AuthTokens | null>(() => {
    const storedTokens = localStorage.getItem("authTokens");
    return storedTokens ? JSON.parse(storedTokens) : null;
  });

  const [user, setUser] = useState<User | null>(() => {
    // On initial page load, try to get the user from localStorage
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (tokens) {
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${tokens.access}`;
    } else {
      delete axios.defaults.headers.common["Authorization"];
    }
  }, [tokens]);

  const setAuthData = (user: User, tokens: AuthTokens) => {
    // 1. Update the state inside the context
    setUser(user);
    setTokens(tokens);

    // 2. Set localStorage for persistence
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("authTokens", JSON.stringify(tokens));

    // 3. Navigate after setting the data
    navigate("/");
  };

  // The LOGOUT function
  const logout = async () => {
    if (tokens) {
      try {
       
        const url = `/api/auth/logout/?refresh=${tokens.refresh}`;
        await axios.post(url, null);
        console.log("Successfully logged out from the server.");
      } catch (error) {
        console.error(
          "Server logout failed.",
          error
        );
      }
    }

    // The 'finally' block is the perfect place for all cleanup and navigation.
    setUser(null);
    setTokens(null);

    localStorage.removeItem("authTokens");
    localStorage.removeItem("user");

    navigate("/signin");
  };

  const contextData = {
    user,
    tokens,
    setAuthData,
    logout,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};

// The custom hook to use the context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
