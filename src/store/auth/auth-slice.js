import { createSlice } from "@reduxjs/toolkit";
//initialisation d'un slice
export const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    user: { name: "Insaf", status: "connected" },
  },
});
