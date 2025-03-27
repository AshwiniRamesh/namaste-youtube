import React from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const VideoCard = ({ videos }) => {
  return (
    <div className="pt-[80px] p-4">
      <h2 className="text-xl font-bold mb-4">Popular Videos</h2>
      {videos.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {videos.map((video) => (
            <Link to={`/watch?v=${video.id}`} key={video.id}>
              <div className="bg-gray-100 p-2 rounded-lg shadow-md cursor-pointer hover:bg-gray-200 transition">
                <img
                  src={video.snippet.thumbnails.medium.url}
                  alt={video.snippet.title}
                  className="w-full h-auto rounded-lg"
                />
                <h3 className="text-sm font-semibold mt-2">{video.snippet.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default VideoCard;
