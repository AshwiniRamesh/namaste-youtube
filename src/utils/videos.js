import { constants } from "../utils/constants";

const API_KEY = constants.youtube.apiKey; // Replace with your API key
const BASE_URL = "https://www.googleapis.com/youtube/v3";

export const getPopularVideos = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/videos?part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=IN&maxResults=50&key=${API_KEY}`
    );
    const data = await response.json();
    return data.items; // Returns an array of video objects
  } catch (error) {
    console.error("Error fetching videos:", error);
    return [];
  }
};
