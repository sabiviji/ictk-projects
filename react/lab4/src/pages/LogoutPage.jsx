import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

function LogoutPage() {
  const navigate = useNavigate();
  const cookies = new Cookies();

  useEffect(() => {
    cookies.remove("user");
    navigate("/");
  });

  return (
    <>
      <span className="loading loading-spinner loading-lg"></span>
    </>
  );
}

export default LogoutPage;
