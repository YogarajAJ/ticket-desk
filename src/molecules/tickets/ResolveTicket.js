import {
    Button,
    Grid,
    Paper,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { TICKET_RESOLVED_MSG } from "../../constants";
import { updateTicket } from "../../store/slices/TicketSlice";
import { updateToastMessageInfo } from "../../store/slices/ToastMessageSlice";
import { formatDate } from "../../utils";

const ResolveTicket = ({ ticketData = {} }) => {
  const [resolution, setResolution] = React.useState("");
  const dispatch = useDispatch();

  const resolveTicket = () => {
    let ticket = { ...ticketData, resolvedAt: formatDate(), resolution, status:'RESOLVED' };
    dispatch(updateTicket(ticket));
    dispatch(updateToastMessageInfo({ open: true, message: TICKET_RESOLVED_MSG, severity:'success' }));
  };

  return (
    <Paper sx={{ padding: 2, backgroundColor: "ghostwhite" }}>
      <Stack spacing={2} margin={0}>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          Submit Resolution
        </Typography>

        <Grid container spacing={1}>
          <Grid item lg={12}>
            <TextField
              id="outlined-multiline-flexible"
              label="Resolution"
              fullWidth
              variant="outlined"
              multiline
              rows={4}
              maxRows={4}
              value={resolution}
              sx={{ backgroundColor: "#fff" }}
              onChange={(event) => setResolution(event.target.value)}
            />
          </Grid>
          <Grid item lg={12}>
            <Button
              variant="contained"
              color="success"
              sx={{ float: "right" }}
              onClick={resolveTicket}
              disabled={resolution === ""}
            >
              Resolve
            </Button>
          </Grid>
        </Grid>
      </Stack>
    </Paper>
  );
};

export default ResolveTicket;
