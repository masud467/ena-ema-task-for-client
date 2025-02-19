import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const addExpense = createAsyncThunk(
  "expense/addExpense",
  async (expenseData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://ena-ema-task-for-server.vercel.app/expenses",
        expenseData,{
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  expenses: [],
  loading: false,
  error: null,
};
const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addExpense.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addExpense.fulfilled, (state, action) => {
        state.loading = false;
        state.expenses.push(action.payload);
      })
      .addCase(addExpense.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export default expenseSlice.reducer;
