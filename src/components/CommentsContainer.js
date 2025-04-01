import React, { useEffect, useState } from "react";
import fetchVideoComments from "../utils/comments";

export default function CommentsContainer({ videoId }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const getComments = async () => {
      if (videoId) {
        try {
          const data = await fetchVideoComments(videoId);
          setComments(data);
        } catch (error) {
          console.error("Failed to fetch comments:", error);
        }
      }
    };

    getComments();
  }, [videoId]);

  return (
    <div className="m-2 p-2">
      <h1 className="text-lg font-bold">Comments</h1>
      <div>
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div key={comment.id} className="border-b p-2 flex items-start gap-2">
              <img src={comment.authorImage} alt={comment.author} className="w-10 h-10 rounded-full" />
              <div>
                <p className="font-semibold">{comment.author}</p>
                <p>{comment.text}</p>
                <p className="text-sm text-gray-500">👍 {comment.likes} Likes</p>

                {/* Render replies if available */}
                {comment.replies.length > 0 && (
                  <div className="ml-6 mt-2 border-l-2 pl-2">
                    <h3 className="text-sm font-semibold">Replies:</h3>
                    {comment.replies.map((reply) => (
                      <div key={reply.id} className="mt-1 flex items-start gap-2">
                        <img src={reply.authorImage} alt={reply.author} className="w-8 h-8 rounded-full" />
                        <div>
                          <p className="font-semibold">{reply.author}</p>
                          <p>{reply.text}</p>
                          <p className="text-xs text-gray-500">👍 {reply.likes} Likes</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))
        ) : (
          <p>No comments available.</p>
        )}
      </div>
    </div>
  );
}
