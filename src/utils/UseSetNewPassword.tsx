/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
const UseSetNewPassword = () => {
  const [otp, setOtp] = React.useState<string>("");
  const [newPassword, setNewPassword] = React.useState<string>("");
  const [error, setError] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);
  const navigate = useNavigate();

  const handleSetNewPassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
        const response = await axios.post(
      "/api/auth/set-new-password/",
      {
        password: newPassword,
        otp: otp,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );

    if (response.status === 201) {
      navigate("/signin");
    } else {
      setError(response.data.error || "validation failed");
    }
    } 
    catch (error: any) {

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
    finally {
      setLoading(false);
    }
    
  };
  return {
    otp,
    setOtp,
    setNewPassword,
    error,
    loading,
    handleSetNewPassword,
  };
};

export default UseSetNewPassword;
