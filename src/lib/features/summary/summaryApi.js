import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// export const fetchSummaryData = createAsyncThunk(
//   "expenses/fetchSummaryData",
//   async ({ userId, date }) => {
//     try {
//       const response = await axios.get(
//         `https://ena-ema-task-for-server.vercel.app/expenses/${userId}/${date}`
//       );
//       return response.data;
//     } catch (error) {
//       throw new Error("Error fetching summary data: " + error.message);
//     }
//   }
// );

export const fetchMonthlySummaryData = createAsyncThunk(
  "expenses/fetchMonthlySummaryData",
  async ({ userId, month }) => {
    try {
      const response = await axios.get(
        `https://ena-ema-task-for-server.vercel.app/expenses/${userId}/monthly`,
        { params: { month } }
      );
      return response.data; // Ensure the response is grouped by date and category
    } catch (error) {
      throw new Error("Error fetching monthly summary data: " + error.message);
    }
  }
);


