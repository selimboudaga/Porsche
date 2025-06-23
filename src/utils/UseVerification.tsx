import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const UseVerification = () => {
    const [otp,setOtp] = React.useState<string>("");
    const [error, setError] = React.useState<string>("");
    const [loading,setLoading] = React.useState<boolean>(false);
    const navigate = useNavigate();
    
    const handleVerification = (email:string) => 
        async (e : React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        setError("");
        setLoading(true);
         const otpAsNumber = parseInt(otp, 10);
        try{
        const response = await axios.post(
            "/api/auth/registration/verify",
            {
                otp: otpAsNumber,
                email:email
            },
            {
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json",
                },
            }
        );
        if (response.status===200){
            navigate("/signin");
        }
        else{
            setError(response.data.error || "validation failed");
        }
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    catch(error:any){
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
    }

  return (
    {   
        otp,
        setOtp,
        error,
        loading,
        handleVerification
    }
  )
}

export default UseVerification
