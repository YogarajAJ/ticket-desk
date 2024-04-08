import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import Home from "./organisms/home";
import { useDispatch } from "react-redux";
import { updateTicketInformation } from "./store/slices/TicketSlice";
import { MOCK_TICKETS } from "./constants";
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      updateTicketInformation({
        tickets: MOCK_TICKETS,
      })
    );
  }, [dispatch]);
  return (
    <Grid container direction="column">
      <Home />
    </Grid>
  );
};

export default App;
