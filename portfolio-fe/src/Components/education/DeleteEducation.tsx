import React, { useState } from "react";
import axiosInstance from "../../assets/axiosInstance";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";

interface DeleteEducationProps {
  educationId: string;
}

const DeleteEducation: React.FC<DeleteEducationProps> = ({ educationId }) => {
  const [open, setOpen] = useState(false);
  
  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };
  
  const handleConfirmDelete = async () => {
    try {
      await axiosInstance.delete(`/education/${educationId}`);
      console.log("Education deleted successfully");
      window.location.reload()
      setOpen(false);
      // You might want to add some feedback or redirect logic here
    } catch (error) {
      console.error("Error deleting education:", error);
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
        Delete Education
      </Button>
     
      {/* Confirmation Dialog */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Confirm Education Deletion"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this education? This action cannot be undone.
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

export default DeleteEducation;