import { configureStore } from "@reduxjs/toolkit";
import { carReducer } from "./carSlice";
import { filterReducer } from "./filterSlice";
import { pageReducer } from "./pageSlice";

export const store = configureStore({
    reducer: {
        carState: carReducer,
        filterState: filterReducer,
        pageState: pageReducer,
    }
});