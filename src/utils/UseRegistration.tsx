import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const UseRegistration = () => {
  const [firstname, setFirstname] = React.useState<string>("");
  const [lastname, setLastname] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [password1, setPassword1] = React.useState<string>("");
  const [password2, setPassword2] = React.useState<string>("");
  const [error, setError] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);
  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
     setLoading(true); 

    try {
      const response = await axios.post(
        "/api/auth/registration/",
        {
          email: email,
          password1: password1,
          password2: password2,
          first_name: firstname,
          last_name: lastname,
          role: "Doctor",
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      if (response.status === 200) {
       navigate(`/email-verification/${email}`);
      } else {
        setError(response.data.error || "Registration failed");
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
    finally {
      setLoading(false);
    }
  };
  return {
    handleSubmit,
    setFirstname,
    setLastname,
    setEmail,
    setPassword1,
    setPassword2,
    error,
    loading,
  };
};

export default UseRegistration;
