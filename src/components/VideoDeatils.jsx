import React from "react";

export default function VideoDeatils({ videoDetails }) {
  return (
    <div className="w-full max-w-[900px] mt-4">
      {/* Title */}
      <h1 className="text-xl font-bold">{videoDetails.snippet.title}</h1>

      {/* Channel + Subscribe Button */}
      <div className="flex justify-between items-center mt-2">
        <div className="flex items-center space-x-3">
          <div className="text-black text-md">
            {videoDetails.snippet.channelTitle}
          </div>
        </div>

        {/* Subscribe Button (Smaller & YouTube-like) */}
        <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded-full text-sm font-semibold">
          Subscribe
        </button>
      </div>

      {/* Stats */}
      <div className="flex space-x-6 text-black mt-2 text-sm">
        <span>
          👀 {parseInt(videoDetails.statistics.viewCount).toLocaleString()}{" "}
          views
        </span>
        <span>
          👍 {parseInt(videoDetails.statistics.likeCount).toLocaleString()}{" "}
          likes
        </span>
        <span>
          💬 {parseInt(videoDetails.statistics.commentCount).toLocaleString()}{" "}
          comments
        </span>
      </div>

      {/* Description */}
      <div className="mt-3 text-black text-sm line-clamp-3">
        {videoDetails.snippet.title}
      </div>
    </div>
  );
}
