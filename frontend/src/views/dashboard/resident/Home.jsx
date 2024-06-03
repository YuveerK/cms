import React from "react";
import Card from "../../../components/resident/home/Card";
import MaintenanceRequestsTable from "../../../components/resident/home/MaintenanceRequestsTable";
import CommunityPostsTable from "../../../components/resident/home/CommunityPostsTable";
import Chart from "../../../components/resident/home/Chart";
import { GoGraph } from "react-icons/go";
import { IoWaterOutline } from "react-icons/io5";
import { FaBoltLightning } from "react-icons/fa6";
import { BsGraphUp } from "react-icons/bs";

const Home = () => {
  return (
    <div className="w-full h-screen overflow-y-auto p-8">
      <div className="w-full flex items-center justify-between">
        <Card
          amount={"680.78"}
          icon={<IoWaterOutline color="aqua" size={40} />}
          title={"Water"}
        />
        <Card
          amount={"1233.78"}
          icon={<FaBoltLightning color="orange" size={40} />}
          title={"Electricity"}
        />
        <Card
          amount={"R5480.78"}
          icon={<BsGraphUp color="blue" size={40} />}
          title={"Levies"}
        />
      </div>

      <div className="w-full h-[600px] shadow-md p-8 mt-8">
        <div className="w-full flex items-center justify-between mb-8">
          <div className="flex items-center ">
            <GoGraph className="mr-4" size={30} />
            <h1 className="text-2xl">Utility Statistics</h1>
          </div>

          <select name="utilities" id="utilities" className="text-2xl">
            <option value="Levies">Levies</option>
            <option value="Water">Water</option>
            <option value="Electricity">Electricity</option>
          </select>
        </div>
        <Chart />
      </div>

      <div className="w-full ">
        {/* Maintenance Request Table */}
        <MaintenanceRequestsTable />
        <CommunityPostsTable />
      </div>
    </div>
  );
};

export default Home;
