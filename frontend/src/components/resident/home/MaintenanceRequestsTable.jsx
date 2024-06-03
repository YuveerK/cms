import React from "react";
import { FaGear } from "react-icons/fa6";

const MaintenanceRequestsTable = () => {
  return (
    <div className="w-full mt-8  h-[500px] overflow-y-auto shadow-md p-8 bg-gray-50">
      <div className="flex items-center">
        <FaGear size={30} className="mr-2" />
        <h1 className="text-3xl ">Maintenance Requests</h1>
      </div>
      <table className="w-full text-left mt-8">
        <thead>
          <tr>
            <th className="px-4 py-2">Request Name</th>
            <th className="px-4 py-2">Request Description</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Date Created</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2">Leaking Tap</td>
            <td className="px-4 py-2">
              My tap is leaking very badly! Please help
            </td>
            <td className="px-4 py-2">Opened</td>
            <td className="px-4 py-2">27-05-2024</td>
            <td className="px-4 py-2">
              <div className="view-btn">View</div>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2">Leaking Tap</td>
            <td className="px-4 py-2">
              My tap is leaking very badly! Please help
            </td>
            <td className="px-4 py-2">Opened</td>
            <td className="px-4 py-2">27-05-2024</td>
            <td className="px-4 py-2">
              <div className="view-btn">View</div>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2">Leaking Tap</td>
            <td className="px-4 py-2">
              My tap is leaking very badly! Please help
            </td>
            <td className="px-4 py-2">Opened</td>
            <td className="px-4 py-2">27-05-2024</td>
            <td className="px-4 py-2">
              <div className="view-btn">View</div>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2">Leaking Tap</td>
            <td className="px-4 py-2">
              My tap is leaking very badly! Please help
            </td>
            <td className="px-4 py-2">Opened</td>
            <td className="px-4 py-2">27-05-2024</td>
            <td className="px-4 py-2">
              <div className="view-btn">View</div>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2">Leaking Tap</td>
            <td className="px-4 py-2">
              My tap is leaking very badly! Please help
            </td>
            <td className="px-4 py-2">Opened</td>
            <td className="px-4 py-2">27-05-2024</td>
            <td className="px-4 py-2">
              <div className="view-btn">View</div>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2">Leaking Tap</td>
            <td className="px-4 py-2">
              My tap is leaking very badly! Please help
            </td>
            <td className="px-4 py-2">Opened</td>
            <td className="px-4 py-2">27-05-2024</td>
            <td className="px-4 py-2">
              <div className="view-btn">View</div>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2">Leaking Tap</td>
            <td className="px-4 py-2">
              My tap is leaking very badly! Please help
            </td>
            <td className="px-4 py-2">Opened</td>
            <td className="px-4 py-2">27-05-2024</td>
            <td className="px-4 py-2">
              <div className="view-btn">View</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MaintenanceRequestsTable;
