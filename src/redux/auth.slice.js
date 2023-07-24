import { createSlice } from "@reduxjs/toolkit";

const state = {
  userId: null,
  userName: null,
  isLogIn: false,
  role: "user",
};

export const authSlice = createSlice({
  name: "auth",
  initialState: state,
  reducers: {
    updateUserProfile: (state, { payload }) => ({
      ...state,
      userId: payload.userId,
      userName: payload.userName,
      isLogIn: true,
    }),
    authStateChange: (state, { payload }) => ({
      ...state,
      stateChange: payload.stateChange,
    }),
    authSignOut: () => state,
    adminRole: (state, { payload }) => ({
      ...state,
      role: "admin",
    }),
  },
});
