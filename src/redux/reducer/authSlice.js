import { createSlice } from "@reduxjs/toolkit";

export const signSlice = createSlice({
  name: "signReducer",
  initialState: {
    phone_number: "",
  },
  reducers: {
    addRegister: (state, action) => {
      state.phone_number = action.payload;
    },
  },
});
