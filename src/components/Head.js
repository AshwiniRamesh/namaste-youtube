import React from "react";
import { FaMicrophone, FaBell, FaPlus } from "react-icons/fa"; // FontAwesome Icons

export default function Head() {
  return (
    <div className="grid grid-flow-col p-4 shadow-md items-center">
      {/* Left Section - Logo & Menu */}
      <div className="flex items-center gap-4">
        <img
          className="h-8 cursor-pointer"
          src="https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"
          alt="menu-icon"
        />
        <img
          className="h-10"
          src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png"
          alt="youtube-logo"
        />
      </div>

      {/* Middle Section - Search Bar + Voice Search */}
      <div className="flex justify-center items-center gap-3">
        <div className="flex border border-gray-300 rounded-full overflow-hidden">
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 w-96 outline-none"
          />
          <button className="bg-gray-100 px-4 py-2 border-l border-gray-300 hover:bg-gray-200">
            🔍
          </button>
        </div>
        {/* 🎙️ YouTube-style Voice Search Icon */}
        <button className="bg-gray-100 p-2 rounded-full hover:bg-gray-200">
          <FaMicrophone className="h-5 w-5 text-gray-700" />
        </button>
      </div>

      {/* Right Section - +Create, Notifications, User Icon */}
      <div className="flex justify-end items-center gap-4">
        <button className="bg-gray-100 px-4 py-2 rounded-md hover:bg-gray-200 flex items-center gap-2">
          <FaPlus className="h-4 w-4" />
          Create
        </button>
        <button className="bg-gray-100 p-2 rounded-full hover:bg-gray-200">
          <FaBell className="h-5 w-5 text-gray-700" />
        </button>
        <img
          className="h-10 w-10 rounded-full cursor-pointer"
          src="https://static.vecteezy.com/system/resources/previews/000/550/731/original/user-icon-vector.jpg"
          alt="user-icon"
        />
      </div>
    </div>
  );
}
