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
