import { useState } from "react";
import "./App.css";
import RegisterPage from "./pages/RegisterPage";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./ProtectedRoute";
import LogoutPage from "./pages/LogoutPage";

function App() {
  return (
    <>
      {/* <h1 className="text-3xl font-bold underline flex justify-center">
        Welcome to my WebpageS
      </h1> */}
      <Navbar />
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route exact path="/home" element={<HomePage />} />
        </Route>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/register" element={<RegisterPage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/logout" element={<LogoutPage />} />
      </Routes>
    </>
  );
}

export default App;
