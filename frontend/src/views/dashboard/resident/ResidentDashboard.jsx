import React from "react";
import ResidentSidebar from "./ResidentSidebar";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";

const ResidentDashboard = () => {
  return (
    <div className="w-full h-screen flex ">
      <ResidentSidebar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default ResidentDashboard;
