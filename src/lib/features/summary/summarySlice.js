import { createSlice } from "@reduxjs/toolkit";
import { fetchMonthlySummaryData } from "./summaryApi";

const initialState={
  groupedSummary: {},
  totalExpense: 0,
  date: "",
  status: "idle",
  error: null
}

const summarySlice = createSlice({
  name: "summary",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMonthlySummaryData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMonthlySummaryData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.groupedExpenses = action.payload.expenses || {};
        state.totalExpense = action.payload.totalExpense || 0;
        state.date = action.payload.date || "";
      })
      .addCase(fetchMonthlySummaryData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { groupedExpenses, totalExpense, status, error } =
  summarySlice.actions;
export default summarySlice.reducer;
