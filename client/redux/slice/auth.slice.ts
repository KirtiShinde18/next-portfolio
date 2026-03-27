import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "../apis/auth.api";
import { getStorage } from "../utils/authStorage";

type adminType = {
  admin: { email: string; name: string; _id: string } | null;
};

const initialState: adminType = {
  admin: getStorage("admin")
};

const adminSlice = createSlice({
  name: "adminSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    //   .addMatcher(authApi.endpoints.signin.matchFulfilled, (state, { payload }) => {
    //     state.admin = payload.admin;
    //   })
      .addMatcher(authApi.endpoints.signoutAdmin.matchFulfilled, (state) => {
        state.admin = null;
      });
  }
});

export default adminSlice.reducer;