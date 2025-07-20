import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ element }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  return isLoggedIn ? element : <Navigate to="/login" />;
};


export default PrivateRoutes;