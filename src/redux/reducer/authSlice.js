import { createSlice } from "@reduxjs/toolkit";

export const signSlice = createSlice({
  name: "signReducer",
  initialState: {
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    address: "",
    city: "",
    houseNumber: "",
    phoneNumber: "",
  },
  reducers: {
    addRegister: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.password_confirmation = action.payload.password;
    },
  },
});
