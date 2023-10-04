import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateWrapper = () => {
  const token = window.localStorage.getItem("token");
  return token ? <Outlet /> : <Navigate to="/login" replace />;
};
export default PrivateWrapper;
