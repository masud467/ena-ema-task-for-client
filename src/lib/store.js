import { configureStore } from "@reduxjs/toolkit";
import expensesReducer from "./features/expenses/expensesSlice";
import spendingLimitReducer from "./features/spendingLimit/spendingLimitSlice";



const store= configureStore({
    reducer: {
        expenses: expensesReducer,
        spendingLimit: spendingLimitReducer,
        
        
    }
})

export default store;