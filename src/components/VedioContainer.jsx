import React, { useEffect, useState } from "react";
import { getPopularVideos } from "../utils/videos";
import VideoCard, { withBorderHigherOrderComponent } from "./VideoCard";

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

  // Wrap VideoCard with withBorder HOC
  const VideoCardWithBorder = withBorderHigherOrderComponent(VideoCard);

  return (
    <div>
      <VideoCardWithBorder videos={videos} />
    </div>
  );
};

export default VedioContainer;
