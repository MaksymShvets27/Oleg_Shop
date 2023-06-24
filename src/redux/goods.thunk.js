import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../constants/Api";

export const getGoodsList = createAsyncThunk("/", async (_, thunkAPI) => {
  try {
    const res = await axios.get(`${API_URL}/goods`);
    return res.data;
  } catch ({ message }) {
    return thunkAPI.rejectWithValue(message);
  }
});

export const addProductAsyncThunk = createAsyncThunk(
  "/addProduct",
  async (product, thunkApi) => {
    try {
      const { data } = await axios.post(`${API_URL}/goods`, product);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteProductAsyncThunk = createAsyncThunk(
  "/deleteProduct",
  async (id, thunkApi) => {
    try {
      const { data } = await axios.delete(`${API_URL}/goods/${id}`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
