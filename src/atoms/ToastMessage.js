import { Alert } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateToastMessageInfo } from "../store/slices/ToastMessageSlice";

const ORIENTATION = { vertical: "bottom", horizontal: "center" };
const ToastMessage = () => {
  const dispatch = useDispatch();
  const toastMessage = useSelector(({ toastMessage }) => toastMessage);

  const handleClose = () => {
    dispatch(updateToastMessageInfo({ open: false, message: "" }));
  };

  return (
    <Snackbar
      anchorOrigin={ORIENTATION}
      open={toastMessage?.open}
      autoHideDuration={5000}
      onClose={handleClose}
    >
      <Alert
        onClose={handleClose}
        severity={toastMessage?.severity}
        variant="filled"
      >
        {toastMessage?.message}
      </Alert>
    </Snackbar>
  );
};
export default ToastMessage;
