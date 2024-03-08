import React from "react";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Welcome to my Website</h1>
            <p className="mb-5">
              Hey, you have come to the right place. To get started sign-in or
              register.
            </p>
            <div className="flex space-x-5 justify-center">
              <button
                className="btn btn-primary"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
              <button
                className="btn btn-primary"
                onClick={() => navigate("/register")}
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
