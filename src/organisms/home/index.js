import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import AppToolbar from "../../atoms/AppToolbar";
import Navbar from "../../molecules/navbar";
import Overlays from "../Overlays";

export default function PermanentDrawerLeft() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppToolbar />
      <Box component="main" sx={{ flexGrow: 1, margin: 3 }}>
        <Toolbar />
        <Navbar />
        <Overlays />
      </Box>
    </Box>
  );
}
