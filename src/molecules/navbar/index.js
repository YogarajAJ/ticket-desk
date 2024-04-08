import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Tickets from "../../organisms/tickets";
import TicketDetails from "../../organisms/tickets/TicketDetails";

const Navbar = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Navigate replace to="/ticket-desk" />} />
      <Route exact path="/ticket-desk" element={<Tickets />} />
      <Route path="/ticket-desk/:id" element={<TicketDetails />} />
    </Routes>
  );
};

export default Navbar;
