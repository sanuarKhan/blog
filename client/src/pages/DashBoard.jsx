import React from "react";
import { Link } from "react-router-dom";

export default function DashBoard() {
  return (
    <div className="container mx-auto  pt-10 h-screen w-full flex gap-10 justify-center bg-gray-500 ">
      <div className="w-1/4">
        <h2 className="text-3xl font-bold p-5 text-center">DashBoard</h2>
        <ul className="flex flex-col gap-5">
          <Link to="/create" className="bg-gray-400 p-2 rounded-md text-center">
            Create Blog
          </Link>
          <li className="bg-gray-400 p-2 rounded-md text-center">My Blogs</li>
          <li className="bg-gray-400 p-2 rounded-md text-center">My Profile</li>
          <li className="bg-gray-400 p-2 rounded-md text-center ">Settings</li>
        </ul>
      </div>
      <div3 className="w-3/4 flex gap-5 h-full">
        <div className="bg-gray-600 pt-5 rounded-md w-1/3 shadow-blue-950 shadow-2xl">
          <h4 className="text-center text-blue-300 text-2xl">Recent Blog</h4>
        </div>
        <div className="bg-gray-600 pt-5 rounded-md w-1/3 shadow-blue-950 shadow-2xl">
          <h4 className="text-center text-blue-300 text-2xl">comments</h4>
        </div>
        <div className="bg-gray-600 pt-5 rounded-md w-1/3 shadow-blue-950 shadow-2xl">
          <h4 className="text-center text-blue-300 text-2xl">Stats</h4>
        </div>
      </div3>
    </div>
  );
}
