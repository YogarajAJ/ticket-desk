import { configureStore } from "@reduxjs/toolkit";
import TicketSlice from "./slices/TicketSlice";
import NewTicketSlice from "./slices/NewTicketSlice";
import ToastMessageSlice from "./slices/ToastMessageSlice";

const store = configureStore({
  reducer: {
    ticketInfo: TicketSlice,
    newTicket: NewTicketSlice,
    toastMessage: ToastMessageSlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
