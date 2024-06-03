import React from "react";
import { MdForum } from "react-icons/md";

const CommunityPostsTable = () => {
  return (
    <div className="w-full mt-8  h-[500px] overflow-y-auto shadow-md p-8 bg-gray-50">
      <div className="flex items-center">
        <MdForum size={30} className="mr-2" />
        <h1 className="text-3xl ">Posts</h1>
      </div>
      <div className="">
        <table className="w-full text-left mt-8 ">
          <thead>
            <tr className="border-b">
              <th className="px-4 py-2">Resident</th>
              <th className="px-4 py-2">Post Name</th>
              <th className="px-4 py-2">Posted At</th>
              <th className="px-4 py-2">Comments</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="px-4 py-2">
                <div className="w-[60px] h-[60px] flex items-center justify-center bg-blue-100">
                  YK
                </div>
              </td>
              <td className="px-4 py-2">Birthday Party</td>
              <td className="px-4 py-2">27-05-2024</td>
              <td className="px-4 py-2">1 257</td>
              <td className="px-4 py-2">
                <div className="view-btn">View</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CommunityPostsTable;
