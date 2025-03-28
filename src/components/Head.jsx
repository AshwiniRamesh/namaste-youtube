import React, { useState, useEffect } from "react";
import { FaMicrophone, FaBell, FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../store/togglesSlice";
import {constants} from '../utils/constants'

export default function Head() {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [videos, setVideos] = useState([]);
  const baseUrl = constants.youtube.searchUrl;
  const API_KEY = constants.youtube.apiKey

  const toggleMenuFun = () => {
    dispatch(toggleMenu());
  };

  // Debounced API call for search
  useEffect(() => {
    const fetchVideos = async () => {
      if (!searchQuery) return;

      try {
        const response = await fetch(
          `${baseUrl}${searchQuery}&type=video&maxResults=50&key=${API_KEY}`
        );
        const data = await response.json();
        setVideos(data.items);
        console.log({videos})
      } catch (error) {
        console.error("Error fetching YouTube videos:", error);
      }
    };

    const timer = setTimeout(fetchVideos, 300); // Debounce for 300ms
    return () => clearTimeout(timer);
  }, [searchQuery]);

  const searchVideos = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50 p-4 grid grid-flow-col items-center">
      {/* Left Section - Logo & Menu */}
      <div className="flex items-center gap-4">
        <img
          onClick={toggleMenuFun}
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
            value={searchQuery}
            onChange={searchVideos} // Fixed event handler
          />
          <button className="bg-gray-100 px-4 py-2 border-l border-gray-300 hover:bg-gray-200">
            🔍
          </button>
        </div>
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
