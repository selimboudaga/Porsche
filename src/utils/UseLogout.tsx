import axios from "axios";
import React from "react";
const UseLogout = () => {
  const [refreshtoken,setRefreshtoken] = React.useState<string>("");
  const [error, setError] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);

  const handleLogout = async (e : React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    setError("");
    setLoading(true);

    const response = await axios.post(
      "/api/auth/logout/",
      {
        refresh: refreshtoken,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    )
  } 
  return (
    <div>
      
    </div>
  )
}

export default UseLogout
