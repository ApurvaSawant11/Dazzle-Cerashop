import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context";

const PrivateRoute = () => {
  const { token } = useAuth();
  return <div>{token ? <Outlet /> : <Navigate to="/login" />}</div>;
};

export { PrivateRoute };
