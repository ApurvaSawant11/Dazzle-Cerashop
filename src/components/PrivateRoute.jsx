import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../context";

const PrivateRoute = () => {
  const { token } = useAuth();
  const location = useLocation();
  return (
    <div>
      {token ? (
        <Outlet />
      ) : (
        <Navigate to="/login" state={{ from: location }} replace />
      )}
    </div>
  );
};

export { PrivateRoute };
