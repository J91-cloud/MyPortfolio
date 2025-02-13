import { useEffect, useState } from "react";
import axiosInstance from "../../assets/axiosInstance";
import commentRequestDTO from "../../Models/commentRequestDTO";
import DeleteComment from "./DeleteComments";
import "../../styles/global.css";

const DisplayComments: React.FC = () => {
  const [comments, setComments] = useState<commentRequestDTO[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  let accessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    axiosInstance
      .get("/comments")
      .then((response) => {
        const commentData: commentRequestDTO[] = response.data.map(
          (comment: any) => ({
            commentId: comment.commentIdentifier.commentId,
            name: comment.name,
            profession: comment.profession,
            content: comment.content,
            status: comment.status,
          }),
        );
        setComments(commentData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching comments:", error);
        setError("Failed to fetch comments.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {comments
        .filter((comment) => comment.status === "PUBLISHED")
        .map((comment, index) => (
          <div
            key={index}
            className="bg-backS shadow-lg rounded-2xl p-6 border border-gray-200 
          transition-transform hover:scale-105 w-full sm:w-[48%] lg:w-[32%] m-10"
          >
            <h1 className="text-lg text-white font-semibold">{comment.name}</h1>
            <p className="text-sm font-medium text-gray-300">
              {comment.profession}
            </p>
            <hr className="my-3 border-gray-300" />
            <p className="text-gray-400 mt-4">{comment.content}</p>

            {accessToken ? (
              <DeleteComment commentId={comment.commentId} />
            ) : (
              <div>
                <p></p>
              </div>
            )}
          </div>
        ))}
    </div>
  );
};
export default DisplayComments;
