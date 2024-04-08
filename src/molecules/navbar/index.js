import React from "react";
import { Route, Routes } from "react-router-dom";
import Tickets from "../../organisms/tickets";
import TicketDetails from "../../organisms/tickets/TicketDetails";

const Navbar = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Tickets />} />
      <Route
        exact
        path="/:id"
        element={
          <TicketDetails />
        }
      />
    </Routes>
  );
};

export default Navbar;
