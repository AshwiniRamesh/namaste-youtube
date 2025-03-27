import React, { useEffect, useState } from "react";
import { getPopularVideos } from "../utils/videos";
import VideoCard from "./VideoCard";

const VedioContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const popularVideos = await getPopularVideos();
        setVideos(popularVideos);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, []);

  return <VideoCard videos={videos} />;
};

export default VedioContainer;
