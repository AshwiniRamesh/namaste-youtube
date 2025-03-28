import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { constants } from "../utils/constants";
import VideoDeatils from "./VideoDeatils";

export default function WatchPage() {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v"); // Extract video ID from URL
  const [videoDetails, setVideoDetails] = useState(null);

  useEffect(() => {
    if (videoId) fetchVideoDetails(videoId);
  }, [videoId]);

  const fetchVideoDetails = async (id) => {
    try {
      const apiKey = constants.youtube.apiKey;
      const baseUrl = constants.youtube.byIdUrl;
      const url = `${baseUrl}${id}&key=${apiKey}`;
      const response = await fetch(url);
      const data = await response.json();
      if (data.items.length > 0) {
        setVideoDetails(data.items[0]);
      }
    } catch (error) {
      console.error("Error fetching video details:", error);
    }
  };

  if (!videoId) {
    return <div className="p-4 text-center text-red-500">Invalid Video ID</div>;
  }

  return (
    <div>
      <div className="min-h-screen bg-black text-white flex flex-col items-center">
        {/* Video Player */}
        <div className="w-full max-w-[900px]">
          <iframe
            className="w-full aspect-video rounded-lg shadow-lg"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube Video Player"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Video Details */}
      {videoDetails && <VideoDeatils videoDetails={videoDetails} />}
    </div>
  );
}
