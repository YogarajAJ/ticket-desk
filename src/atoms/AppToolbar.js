import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";

const AppToolbar = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          Welcome! John
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default AppToolbar;
