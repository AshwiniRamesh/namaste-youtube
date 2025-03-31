import { FaMicrophone, FaBell, FaPlus } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../store/togglesSlice";
import { constants } from "../utils/constants";
import { setVideos } from "../store/videosSlice";
import { useNavigate } from "react-router-dom";
import { cacheResults } from "../store/searchSlice";

export default function Head() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cachedSearchResults = useSelector((state) => state.search);
  const [query, setQuery] = useState("");

  const baseUrl = constants.youtube.searchUrl;
  const API_KEY = constants.youtube.apiKey;

  const toggleMenuFun = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    const fetchVideos = async () => {
      if (!query.trim()) return;

      if (cachedSearchResults[query]) {
        dispatch(setVideos(cachedSearchResults[query]));
        navigate("/search");
        return;
      }
      try {
        const response = await fetch(
          `${baseUrl}${query}&type=video&maxResults=50&key=${API_KEY}`
        );
        const data = await response.json();
        if (data?.items) {
          dispatch(setVideos(data.items));
          dispatch(cacheResults({ [query]: data.items }));
          navigate("/search");
        }
      } catch (error) {
        console.error("Error fetching YouTube videos:", error);
      }
    };

    const timer = setTimeout(fetchVideos, 500);
    return () => clearTimeout(timer);
  }, [query, dispatch, cachedSearchResults]);

  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50 p-4 grid grid-flow-col items-center">
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

      <div className="flex justify-center items-center gap-3">
        <div className="flex border border-gray-300 rounded-full overflow-hidden">
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 w-96 outline-none"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="bg-gray-100 px-4 py-2 border-l border-gray-300 hover:bg-gray-200">
          <FaMicrophone className="h-5 w-5 text-gray-700" />
          </button>
        </div>
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
