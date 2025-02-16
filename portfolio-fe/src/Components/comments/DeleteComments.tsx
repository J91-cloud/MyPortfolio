import React from "react";
import axiosInstance from "../../assets/axiosInstance";
import { Button } from "@mui/material";

interface DeleteCommentProps {
  commentId: string;
}

const DeleteComment: React.FC<DeleteCommentProps> = ({ commentId }) => {
  const handleClick = async () => {
    try {
      await axiosInstance.delete(`/comments/${commentId}`);
      console.log("Comment deleted successfully");
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  };

  return (
    <Button variant="contained" color="error" onClick={handleClick}>
      Delete Comment
    </Button>
  );
};

export default DeleteComment;
