import { createAsyncThunk } from "@reduxjs/toolkit";
import { signSlice } from "../reducer/authSlice";

export const signAction = createAsyncThunk(
  "post/postRegister",
  async (data, { dispatch }) => {
    dispatch(addRegister(data.phone_number));
  }
);

// export const getPhoneAction = createAsyncThunk(
//   "get/getPhone",
//   async (arg, { dispatch }) => {
//     const currentState= getState().example;
//     console.log(currentState)
//   }
// );

//memanggil action yg ada di reducer authSlice
export const { addRegister } = signSlice.actions;
