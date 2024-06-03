import React from "react";
import { Link } from "react-router-dom";
import avatar from "../../../assets/avatar.png";
import { FaHome } from "react-icons/fa";

const ResidentSidebar = () => {
  return (
    <div className="w-52 h-screen overflow-y-auto bg-gray-50">
      <div className="w-full flex items-center justify-center p-4">
        <img src={avatar} alt="" srcset="" className="w-20 h-20 rounded-full" />
      </div>
      <div className="w-full p-4 bg-gray-200">
        <div className="flex items-center">
          <FaHome size={30} className="mr-2" />

          <Link to={"/resident/home"}>Home</Link>
        </div>
      </div>
    </div>
  );
};

export default ResidentSidebar;
