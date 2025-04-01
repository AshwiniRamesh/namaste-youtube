import { constants } from "../utils/constants";

const fetchVideoComments = async (videoId) => {
  const API_KEY = constants.youtube.apiKey;
  const url = `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet,replies&videoId=${videoId}&key=${API_KEY}&maxResults=50`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!data.items) return [];

    return data.items.map((item) => ({
      id: item.snippet.topLevelComment.id,
      author: item.snippet.topLevelComment.snippet.authorDisplayName,
      authorImage: item.snippet.topLevelComment.snippet.authorProfileImageUrl,
      text: item.snippet.topLevelComment.snippet.textDisplay,
      likes: item.snippet.topLevelComment.snippet.likeCount,
      replies: item.replies?.comments.map((reply) => ({
        id: reply.id,
        author: reply.snippet.authorDisplayName,
        authorImage: reply.snippet.authorProfileImageUrl,
        text: reply.snippet.textDisplay,
        likes: reply.snippet.likeCount,
      })) || [],
    }));
  } catch (error) {
    console.error("Error fetching comments:", error);
    return [];
  }
};

export default fetchVideoComments;
