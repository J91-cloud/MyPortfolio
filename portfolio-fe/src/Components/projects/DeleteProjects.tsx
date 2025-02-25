import React from "react";
import axiosInstance from "../../assets/axiosInstance";
import { Button } from "@mui/material";

interface DeleteProjectProps {
  projectId: string;
}

const DeleteProject: React.FC<DeleteProjectProps> = ({ projectId }) => {
  const handleClick = async () => {
    try {
      await axiosInstance.delete(`/projects/${projectId}`);
      console.log("Project deleted successfully");
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };

  return (
    <Button variant="contained" color="error" onClick={handleClick}>
      Delete Project
    </Button>
  );
};

export default DeleteProject;
