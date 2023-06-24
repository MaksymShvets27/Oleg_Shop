import { createSlice } from "@reduxjs/toolkit";
import Notiflix, { Notify } from "notiflix";
import {
  addProductAsyncThunk,
  deleteProductAsyncThunk,
  getGoodsList,
} from "./goods.thunk";

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
        Notify.success(`Welcome to beta!`);
      })
      .addCase(getGoodsList.rejected, (_) => {
        Notify.failure("Error");
      })
      .addCase(addProductAsyncThunk.fulfilled, (state, action) => {
        state.goods.push(action.payload);
        Notify.success(`Product add!`);
      })
      .addCase(addProductAsyncThunk.rejected, (_) => {
        Notify.failure("Error");
      })
      .addCase(deleteProductAsyncThunk.fulfilled, (state, action) => {
        let index = action.payload.id;
        state.goods = state.goods.filter((product) => product.id !== index);
        Notify.success(`Product delete!`);
      })
      .addCase(deleteProductAsyncThunk.rejected, (_) => {
        Notify.failure("Error");
      }),
});

export const goodsReducer = goodsSlise.reducer;
