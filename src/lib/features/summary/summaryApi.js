import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSummaryData = createAsyncThunk(
  "expenses/fetchSummaryData",
  async ({ userId, date }) => {
    try {
      const response = await axios.get(
        `https://ena-ema-task-for-server.vercel.app/expenses/${userId}`
      );
      return response.data;
    } catch (error) {
      throw new Error("Error fetching summary data: " + error.message);
    }
  }
);
