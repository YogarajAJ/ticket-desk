/**
 * This component can be used to inject all the Overlays
 * Each overlays can be triggered based on their respective values maintained in the store
 */
import React from "react";
import CreateTicketForm from "./tickets/CreateTicketForm";
import ToastMessage from "../atoms/ToastMessage";

const Overlays = () => {
  return (
    <div>
      <CreateTicketForm />
      <ToastMessage />
    </div>
  );
};

export default Overlays;
