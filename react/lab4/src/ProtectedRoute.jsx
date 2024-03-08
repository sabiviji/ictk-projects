import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Cookies from "universal-cookie";

function ProtectedRoute() {
  const cookies = new Cookies();
  let user = cookies.get("user");
  console.log("user", user);
  return user ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoute;
