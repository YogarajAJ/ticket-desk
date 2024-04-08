import { TextField } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateNewTicketInfo } from "../store/slices/NewTicketSlice";
const TextFieldComponent = (props) => {
  const dispatch = useDispatch();

  const value = useSelector(({ newTicket }) => newTicket[props['valueKey']]);
  const handleChange = (event) => {
    dispatch(updateNewTicketInfo({ [props['valueKey']]: event.target.value }));
  };

  return (
    <TextField
      sx={{ backgroundColor: "#fff" }}
      {...props}
      onChange={handleChange}
      value={value}
    />
  );
};

export default TextFieldComponent;
