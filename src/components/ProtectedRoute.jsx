import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const login = false;

  if (!login) return <Navigate to="/home" />;
  return children;
};

export default ProtectedRoute;
