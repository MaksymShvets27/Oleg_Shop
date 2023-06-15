import { createSlice } from "@reduxjs/toolkit";
import Notiflix, { Notify } from "notiflix";
import { getGoodsList } from "./goods.thunk";

Notiflix.Notify.init({
  position: "center-top",
  background: "#8AA936",
  width: "340px",
  closeButton: false,
  timeout: 4000,
});

Notiflix.Notify.merge({
  background: "#8AA936",
  position: "center-bottom",
});

export const goodsSlise = createSlice({
  name: "goods",
  initialState: {
    goods: [],
  },
  extraReducers: (builder) =>
    builder
      .addCase(getGoodsList.fulfilled, (state, action) => {
        state.goods = action.payload;
        console.log(action);

        Notify.success(`Welcome to beta!`);
      })
      .addCase(getGoodsList.rejected, (_) => {
        Notify.failure("Error");
      }),
});

export const goodsReducer = goodsSlise.reducer;
