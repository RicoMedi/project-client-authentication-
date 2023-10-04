import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChanges = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:9000/api/login", credentials)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        navigate("/friends");
      })
      .catch(() => {
        setError("Incorrect username / password combination.");
      });
  };

  return (
    <div className="login-page">
      <h3>{error}</h3>
      <h1> LOGIN </h1>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="username">USERNAME: </label>
        <input
          name="username"
          id="username"
          onChange={handleChanges}
          value={credentials.username}
          placeholder="enter username"
        ></input>
        <label htmlFor="password">PASSWORD: </label>
        <input
          name="password"
          id="password"
          type="password"
          onChange={handleChanges}
          value={credentials.password}
          placeholder="enter password"
        ></input>

        <button> SUBMIT </button>
      </form>
    </div>
  );
};
export default Login;
