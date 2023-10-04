/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from "react";
import axios from "axios";

const Friends = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:9000/api/friends", {
        headers: {
          authorization: token,
        },
      })
      .then((resp) => {
        setFriends(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>Friends</h1>
      <ul>
        {friends.map((amigos) => {
          return (
            <li>
              {amigos.name} - {amigos.age} - {amigos.email}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Friends;
