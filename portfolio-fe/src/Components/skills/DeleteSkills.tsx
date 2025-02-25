import React from "react";
import axiosInstance from "../../assets/axiosInstance";
import { Button } from "@mui/material";

interface DeleteSkillProps {
  skillId: string;
}

const DeleteSkill: React.FC<DeleteSkillProps> = ({ skillId }) => {
  const handleClick = async () => {
    try {
      await axiosInstance.delete(`/skills/${skillId}`);
      console.log("Skill deleted successfully");
      window.location.reload();
    } catch (error) {
      console.error("Error deleting skill:", error);
    }
  };

  return (
    <Button variant="contained" color="error" onClick={handleClick}>
      Delete Skill
    </Button>
  );
};

export default DeleteSkill;
