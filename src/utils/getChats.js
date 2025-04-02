import { constants } from "../utils/constants";

// Fetch Live Chat ID
export const fetchLiveChatId = async (videoId) => {
  try {
    const API_KEY = constants.youtube.apiKey;
    const url = `${constants.youtube.liveChatId}${videoId}&key=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();

    if (data.items.length > 0) {
      return data.items[0].liveStreamingDetails?.activeLiveChatId || null;
    }
    return null;
  } catch (error) {
    console.error("Error fetching live chat ID:", error);
    return null;
  }
};

// Fetch Live Chat Messages
export const fetchLiveMessages = async (liveChatId) => {
  try {
    if (!liveChatId) return [];

    const API_KEY = constants.youtube.apiKey;
    const url = `${constants.youtube.chatDetails}${liveChatId}&part=snippet,authorDetails&key=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();

    if (!data.items) return [];

    return data.items.map((item) => ({
      id: item.id,
      author: item.authorDetails.displayName,
      authorImage: item.authorDetails.profileImageUrl,
      message: item.snippet.displayMessage,
    }));
  } catch (error) {
    console.error("Error fetching live chat messages:", error);
    return [];
  }
};
