import { useEffect, useState } from "react"
import axiosInstance from "../../assets/axiosInstance";
import commentRequestDTO from "../../Models/commentRequestDTO"
import "../../styles/global.css"

const DisplayComments:React.FC = () => {

const [comments, setComments] = useState<commentRequestDTO[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axiosInstance
      .get("/comments")
      .then((response) => {
        const commentData: commentRequestDTO[] = response.data.map(
          (comment: any) => ({
            name: comment.name,
            profession: comment.profession,
            content: comment.content
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
    <div className="grid gap-4 mt-20 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-30">
  {comments.map((comment, index) => (
    <div
      key={index}
      className="bg-backS shadow-lg rounded-2xl p-6 border 
      border-gray-200 transition-transform hover:scale-105 mt-10"
    >
      <h1 className="text-lg text-white font-semibold">{comment.name}</h1>
      <p className="text-sm font-medium text-gray-300">{comment.profession}</p>
      <hr className="my-3 border-gray-300" />
      <p className="text-gray-400 mt-10">{comment.content}</p>
    </div>
  ))}
</div>


  );
};
export default DisplayComments;