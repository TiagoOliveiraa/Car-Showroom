import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: "filter",
    initialState: {
        filters: {
            make: "",
            model: "",
            maxBid: 0,
            favourites: false,
        }
    },
    reducers: {
        updateFilters(state,action){
            state.filters.make = action.payload.make;
            state.filters.model = action.payload.model;
            state.filters.maxBid = action.payload.bid;
            state.filters.favourites = action.payload.favourite;
        },
        clearAllFilters(state){
            state.filters.make = "";
            state.filters.model = "";
            state.filters.maxBid = 0;
            state.filters.favourites = false;
        }
    }
})

export const {updateFilters, clearAllFilters} = filterSlice.actions;
export const filterReducer = filterSlice.reducer;