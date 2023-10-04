import React, { useEffect } from "react";
import axios from "axios";

const Logout = () => {
  useEffect(() => {
    const token= localStorage.getItem("token");
    axios
      .post("http://localhost:9000/api/logout", {},{
        headers: {
          authorization: token
        }
      })
      .then((res) => {
        localStorage.removeItem("token");
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return <h2>You Logged Out</h2>;
};
export default Logout;
