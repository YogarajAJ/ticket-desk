import { createSlice } from "@reduxjs/toolkit";

export const TicketSlice = createSlice({
  name: "ticketInfo",
  initialState: {
    tickets: [],
  },
  reducers: {
    updateTicketInformation: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    createNewTicket: (state, action) => {
      state.tickets.unshift(action.payload);
    },
    updateTicket: (state, action) => {
      let ticket = action.payload;
      const index = state.tickets.findIndex((tc) => tc?.id === ticket?.id);
      if (index !== -1) {
        const updatedTickets = [
          ...state.tickets.slice(0, index),
          ticket,
          ...state.tickets.slice(index + 1),
        ];

        return {
          ...state,
          tickets: updatedTickets,
        };
      }
      return state;
    },
  },
});

export const { updateTicketInformation, createNewTicket, updateTicket } = TicketSlice.actions;

export default TicketSlice.reducer;
