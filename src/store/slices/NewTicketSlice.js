import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  openDialog: false,
  title: "",
  description: "",
  category: "",
  priority: "",
};
export const NewTicketSlice = createSlice({
  name: "newTicket",
  initialState: INITIAL_STATE,
  reducers: {
    updateNewTicketInfo: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    resetTicketData: (state) => (state = INITIAL_STATE),
  },
});

export const { updateNewTicketInfo, resetTicketData } = NewTicketSlice.actions;

export default NewTicketSlice.reducer;
