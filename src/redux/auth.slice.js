import { createSlice } from "@reduxjs/toolkit";

const state = {
  userId: null,
  userName: null,
  email: null,
  isLogIn: false,
  role: "user",
  cashList: [],
  favoriteList: [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState: state,
  reducers: {
    updateUserProfile: (state, { payload }) => ({
      ...state,
      userId: payload.userId,
      userName: payload.userName,
      email: payload.email,
      isLogIn: payload.isLogIn ? true : false,
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
    addGoodToCashList: (state, { payload }) => ({
      ...state,
      cashList: [...state.cashList, payload],
    }),
    removeGoodFromCashList: (state, { payload }) => ({
      ...state,
      cashList: payload,
    }),
    clearCashList: (state, { payload }) => ({
      ...state,
      cashList: [],
    }),
    setFavoriteList: (state, { payload }) => ({
      ...state,
      favoriteList: payload,
    }),
    addToFavoriteList: (state, { payload }) => ({
      ...state,
      favoriteList: [...state.favoriteList, payload],
    }),
    deleteFromFavoriteList: (state, { payload }) => ({
      ...state,
      favoriteList: payload,
    }),
  },
});
