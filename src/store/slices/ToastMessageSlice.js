import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  open: false,
  message: "",
};
export const ToastMessageSlice = createSlice({
  name: "toastMessage",
  initialState: INITIAL_STATE,
  reducers: {
    updateToastMessageInfo: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
});

export const { updateToastMessageInfo } = ToastMessageSlice.actions;

export default ToastMessageSlice.reducer;
