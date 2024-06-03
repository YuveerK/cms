import React from "react";
import { Routes, Route } from "react-router-dom";
import ResidentDashboard from "../views/dashboard/resident/ResidentDashboard";
import Login from "../views/auth/resident/Login";
import SignUp from "../views/auth/resident/SignUp";
const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/*" element={<ResidentDashboard />} />
    </Routes>
  );
};

export default Navigation;
