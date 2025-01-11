import { createSlice } from "@reduxjs/toolkit";
import { fetchSummaryData } from "./summaryApi";

const summarySlice = createSlice({
  name: "summary",
  initialState: {
    groupedSummary: {},
    totalExpense: 0,
    date: "",
    status: "idle", // loading status
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSummaryData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSummaryData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.groupedExpenses = action.payload.expenses || {};
        state.totalExpense = action.payload.totalExpense || 0;
        state.date = action.payload.date || "";
      })
      .addCase(fetchSummaryData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { groupedExpenses, totalExpense, status, error } =
  summarySlice.actions;
export default summarySlice.reducer;
