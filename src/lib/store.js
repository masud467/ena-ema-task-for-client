import { configureStore } from "@reduxjs/toolkit";
import expensesReducer from "./features/expenses/expensesSlice";
import spendingLimitReducer from "./features/spendingLimit/spendingLimitSlice";
import summaryReducer from "./features/summary/summarySlice";



const store= configureStore({
    reducer: {
        expenses: expensesReducer,
        spendingLimit: spendingLimitReducer,
        summary: summaryReducer,
        
        
    }
})

export default store;