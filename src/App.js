import React from "react";
import "./App.css";
import Login from "./components/login";
import AddFriend from "./components/AddFriend";
import Friends from "./components/Friends";
import Logout from "./components/Logout";
import { Routes, Route, Link } from "react-router-dom";
import PrivateWrapper from "./components/PrivateWrapper";

function App() {
  return (
    <div className="App">
      <header>
        <h1> FRIENDS DATABASE </h1>
        <nav>
          <Link className="links" to="login">
            {" "}
            Login{" "}
          </Link>{" "}
          &nbsp;
          <Link className="links" to="friends">
            {" "}
            Friends{" "}
          </Link>{" "}
          &nbsp;
          <Link className="links" to="friends/add">
            {" "}
            Add Friend{" "}
          </Link>{" "}
          &nbsp;
          <Link className="links" to="logout">
            {" "}
            Log Out
          </Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={PrivateWrapper}>
          <Route path="/friends" element={<Friends />} />
          <Route path="/friends/add" element={<AddFriend />} />
          <Route path="/logout" element={<Logout />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;
