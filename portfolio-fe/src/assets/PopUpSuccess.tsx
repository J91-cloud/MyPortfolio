import React from "react";
import { Snackbar, Alert } from "@mui/material";

interface PopUpSuccessProps {
  message: string;
}

const PopUpSuccess: React.FC<PopUpSuccessProps> = ({ message }) => {
  return (
    <Snackbar autoHideDuration={3000}>
      <Alert severity="success">{message}</Alert>
    </Snackbar>
  );
};

export default PopUpSuccess;
