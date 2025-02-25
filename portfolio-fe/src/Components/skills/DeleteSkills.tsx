import React, { useState } from "react";
import axiosInstance from "../../assets/axiosInstance";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";

interface DeleteSkillProps {
  skillId: string;
}

const DeleteSkill: React.FC<DeleteSkillProps> = ({ skillId }) => {
  const [open, setOpen] = useState(false);
  
  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };
  
  const handleConfirmDelete = async () => {
    try {
      await axiosInstance.delete(`/skills/${skillId}`);
      console.log("Skill deleted successfully");
      window.location.reload();
      setOpen(false);
    } catch (error) {
      console.error("Error deleting skill:", error);
    }
  };
  
  return (
    <>
      <Button
        variant="contained"
        color="error"
        onClick={handleClickOpen}
      >
        Delete Skill
      </Button>
     
      {/* Confirmation Dialog */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Confirm Skill Deletion"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this skill? This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleConfirmDelete} color="error" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DeleteSkill;