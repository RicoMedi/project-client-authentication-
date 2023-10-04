import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddFriend = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    age: "",
    email: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    axios
      .post("http://localhost:9000/api/friends", form, {
        headers: {
          authorization: token,
        },
      })
      .then((res) => {
        navigate("/friends");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="login-page">
      <h1> Add Friend </h1>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="name">NAME: </label>
        <input
          name="name"
          id="name"
          placeholder="enter name"
          value={form.name}
          onChange={handleChange}
        ></input>
        <label htmlFor="age">Age: </label>
        <input
          type="number"
          name="age"
          id="age"
          placeholder="enter age"
          value={form.age}
          onChange={handleChange}
        ></input>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="enter email"
          value={form.email}
          onChange={handleChange}
        ></input>

        <button> SUBMIT </button>
      </form>
    </div>
  );
};
export default AddFriend;
