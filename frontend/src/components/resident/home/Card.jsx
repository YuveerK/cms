import React from "react";
import { IoWaterOutline } from "react-icons/io5";

const Card = ({ title, amount, icon }) => {
  return (
    <div className="w-60 h-40  rounded-md shadow-md p-4">
      <p className="mb-4 text-xs">June 2024</p>
      <div className=" flex items-center justify-center flex-col">
        {icon}

        <p className="text-2xl mt-4">
          {title}: {amount}
        </p>
      </div>
    </div>
  );
};

export default Card;
