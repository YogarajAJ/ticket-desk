import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Stack,
} from "@mui/material";
import { get } from "lodash";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import SelectComponent from "../../atoms/SelectComponent";
import TextFieldComponent from "../../atoms/TextfieldComponent";
import { TICKET_CATEGORY, TICKET_PRIORITY } from "../../constants";
import {
    resetTicketData
} from "../../store/slices/NewTicketSlice";
import { createNewTicket } from "../../store/slices/TicketSlice";
import { createTicket, validateTicketInfo } from "../../utils";

const CreateTicketForm = () => {
  const dispatch = useDispatch();
  const ticketInfo = useSelector(({ newTicket }) => newTicket);
  const openDialog = get(ticketInfo, "openDialog", false);

  const handleClose = (event, reason) => {
    event.stopPropagation();
    if (reason === "backdropClick") {
      console.log("asdas");
    } else {
      dispatch(resetTicketData());
    }
  };

  const handleCreateTicket = (event) => {
    event.stopPropagation();
    let ticket = createTicket(ticketInfo);
    dispatch(createNewTicket(ticket));
    dispatch(resetTicketData());
  };

  const disableCreateTicket = validateTicketInfo(ticketInfo);
  return (
    <Dialog
      open={openDialog}
      fullWidth
      maxWidth={"md"}
      onClose={handleClose}
      disableEscapeKeyDown
    >
      <DialogTitle>Create New Ticket</DialogTitle>
      <DialogContent>
        <Stack spacing={3}>
          <DialogContentText>
            Write and address new queries and issues
          </DialogContentText>
          <TextFieldComponent
            autofocus
            required
            margin="dense"
            id="name"
            name="email"
            label="Title"
            type="text"
            fullWidth
            variant="outlined"
            valueKey="title"
          />
          <TextFieldComponent
            required
            margin="dense"
            id="name"
            name="email"
            label="Description"
            type="text"
            fullWidth
            variant="outlined"
            multiline
            rows="3"
            valueKey="description"
          />
          <SelectComponent
            valueKey="category"
            required={true}
            menus={TICKET_CATEGORY}
            label="Category"
          />
          <SelectComponent
            valueKey="priority"
            required={true}
            menus={TICKET_PRIORITY}
            label="Priority"
          />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" color="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button
          variant="contained"
          onClick={handleCreateTicket}
          disabled={disableCreateTicket}
        >
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default CreateTicketForm;
