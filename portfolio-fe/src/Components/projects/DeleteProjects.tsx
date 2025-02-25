import React, { useState } from "react";
import axiosInstance from "../../assets/axiosInstance";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";

interface DeleteProjectProps {
  projectId: string;
}

const DeleteProject: React.FC<DeleteProjectProps> = ({ projectId }) => {
  const [open, setOpen] = useState(false);
  
  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };
  
  const handleConfirmDelete = async () => {
    try {
      await axiosInstance.delete(`/projects/${projectId}`);
      console.log("Project deleted successfully");
      window.location.reload()
      setOpen(false);
      // You might want to add some feedback or redirect logic here
    } catch (error) {
      console.error("Error deleting project:", error);
      // You might want to display an error message to the user
    }
  };
  
  return (
    <>
      <Button
        variant="contained"
        color="error"
        onClick={handleClickOpen}
      >
        Delete Project
      </Button>
     
      {/* Confirmation Dialog */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Confirm Project Deletion"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this project? This action cannot be undone.
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

export default DeleteProject;