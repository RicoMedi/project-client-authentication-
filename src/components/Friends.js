/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from "react";

import axiosWithAuth from "../utils/axiosWithAuth";

const Friends = () => {
  const [friends, setFriends] = useState([]);

 
  useEffect(() => {
    axiosWithAuth()
      .get("/friends")
      .then((resp) => {
        setFriends(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="friends-list">
      <h1>Friends</h1>
      <ul>
        {friends.map((amigos, idx) => {
          return (
            <li key={idx} className="names">
              {amigos.name} - {amigos.age} - {amigos.email}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Friends;
