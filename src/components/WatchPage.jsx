import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { constants } from "../utils/constants";
import VideoDeatils from "./VideoDeatils";
import CommentsContainer from './CommentsContainer';
import LiveChatContainer from './LiveChatContainer';

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
    <div className="p-2 m-2">
      <div className="flex gap-4">
        {/* Fixed size video player */}
        <div className="w-[900px] h-[500px]">
          <iframe
            className="w-full h-full rounded-lg shadow-lg"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube Video Player"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>

        {/* Fixed size Live Chat */}
        <div className="w-[400px] h-[500px]">
          <LiveChatContainer videoId={videoId} />
        </div>
      </div>

      {/* Video Details & Comments */}
      {videoDetails && <VideoDeatils videoDetails={videoDetails} />}
      <CommentsContainer videoId={videoId} />
    </div>
  );
}
