import { useAuth } from "@/context/AuthContext";
import axios from "axios";
import React from "react";

const UseLogin = () => {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [error, setError] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);
  const {setAuthData} = useAuth();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // --- Read the CSRF token directly from the cookie ---
      // This is the logic from the getCookie function, just placed inline here
      const getCsrfToken = () => {
        const cookieValue = document.cookie
          .split("; ")
          .find((row) => row.startsWith("csrftoken="))
          ?.split("=")[1];
        return cookieValue || null;
      };

      const csrfToken = getCsrfToken();

      // If we couldn't find the token, stop here.
      if (!csrfToken) {
        setError("CSRF token not found. Please refresh the page.");
        setLoading(false);
        return;
      }

      const response = await axios.post(
        "api/auth/login/",
        {
          email: email,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "device-token": "some-placeholder-fcm-token-if-not-available",
            "device-type": "android",
            "X-CSRFTOKEN": csrfToken,
          },
        }
      );
      console.log("login response payload:", response.data);
      if (response.status === 200) {
        const data = response.data;
        const tokens = {access: data.access, refresh: data.refresh};
        const user = data.user;
        setAuthData(user, tokens);  
      } else {
        setError(response.data?.error || "Sign in failed");
      }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {

      if (error.response) {
        // Server responded with error status (4xx, 5xx)
        console.error("Error response data:", error.response.data);

        // Extract server error message
        let serverError = error.response.data?.error;
        if (typeof serverError === "string") {
          if (serverError.includes(": ")) {
            serverError = serverError.split(": ")[1];
          }
        }
        setError(serverError);
      }
    }
    finally{
      setLoading(false);
    }
  };
  return {
    email,
    setEmail,
    setPassword,
    handleLogin,
    error,
    loading
  };
};

export default UseLogin;
