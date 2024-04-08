/** Unused Component  */
import ConfirmationNumberOutlinedIcon from "@mui/icons-material/ConfirmationNumberOutlined";
import {
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

const LeftMenuDrawer = () => {
  const navigate = useNavigate();

  const navigateToTickets = () => {
    navigate("/");
  };
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar>
        <Typography align="center" variant="h4" fontWeight={600}>
          Ticket Desk
        </Typography>
      </Toolbar>
      <List>
        <ListItem key={"Tickets"} disablePadding onClick={navigateToTickets}>
          <ListItemButton>
            <ListItemIcon>
              <ConfirmationNumberOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={"Tickets"} />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default LeftMenuDrawer;
