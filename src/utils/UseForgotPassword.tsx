/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const UseForgotPassword = () => {
    const [pwderror, setError] = React.useState<string>("");
    const [pwdloading, setLoading] = React.useState<boolean>(false);
    const navigate = useNavigate();
    const handleForgotPassword =  async (email:string)=>{
        setError("");
        setLoading(true);

        const getCsrfToken = () => {
        const cookieValue = document.cookie
          .split("; ")
          .find((row) => row.startsWith("csrftoken="))
          ?.split("=")[1];
        return cookieValue || null;
      };
        const csrfToken = getCsrfToken();
        if (!csrfToken) {
            setError("Security token missing. Please refresh.");
            setLoading(false);
            return;
        }

        try {
            const response = await axios.post(
            "/api/auth/forgot-password/",
            {
                email: email,
            },
            {
                headers: {
                  "Content-Type": "application/json",
                  "Accept": "application/json",
                   "X-CSRFTOKEN": csrfToken,
                },
            }
        )

        if (response.status===201){
            navigate(`/password-verification/${email}`);
        }
        else{
            setError(response.data.error || "Password reset failed");
        }
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
    finally {
      setLoading(false);
    }

        

    }
  return (
    {
        handleForgotPassword,
        pwderror,
        pwdloading
    }
  )
}

export default UseForgotPassword
