import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const postSpendingLimit = createAsyncThunk(
  "spendingLimit/postSpendingLimit",
  async (spendingLimitData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://ena-ema-task-for-server.vercel.app/spendingLimit",
        spendingLimitData
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  loading: false,
  error: null,
  success: null,
};
const spendingLimitSlice = createSlice({
  name: "spendingLimit",
  initialState,
  reducers: {
    clearMessage: (state) => {
      state.success = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postSpendingLimit.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = null;
      })
      .addCase(postSpendingLimit.fulfilled, (state, action) => {
        state.loading = false;
        state.success = action.payload.message;
      })
      .addCase(postSpendingLimit.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearMessage } = spendingLimitSlice.actions;
export default spendingLimitSlice.reducer;
