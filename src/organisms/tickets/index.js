import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import TicketList from "./TicketList";
import { useDispatch } from "react-redux";
import { updateNewTicketInfo } from "../../store/slices/NewTicketSlice";

const Tickets = () => {
  const dispatch = useDispatch();
  const openNewTicketForm = () => {
    dispatch(updateNewTicketInfo({ openDialog: true }));
  };
  return (
    <Stack spacing={2} backgroundColor="#F9F9F9">
      <Stack justifyContent="space-between" direction="row">
        <Typography align="left" fontWeight={600} variant="h4">
          Tickets
        </Typography>
        <Button variant="contained" onClick={openNewTicketForm}>
          New Ticket
        </Button>
      </Stack>
      <TicketList />
    </Stack>
  );
};

export default Tickets;
