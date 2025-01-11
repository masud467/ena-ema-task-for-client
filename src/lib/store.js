import { configureStore } from "@reduxjs/toolkit";
import expensesReducer from "./features/expenses/expensesSlice";
import spendingLimitReducer from "./features/spendingLimit/spendingLimitSlice";
import expenseSummaryReducer from "./features/summary/summarySlice";



const store= configureStore({
    reducer: {
        expenses: expensesReducer,
        spendingLimit: spendingLimitReducer,
        expenseSummary: expenseSummaryReducer,
        
        
    }
})

export default store;