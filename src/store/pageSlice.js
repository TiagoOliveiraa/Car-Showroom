import { createSlice } from "@reduxjs/toolkit";

const pageSlice = createSlice({
  name: "page",
  initialState: {
    currentPage: 1,
    carsPerPage: 5,
    orderBy: "",
  },
  reducers: {
    setCarsPerPage(state, action) {
      state.carsPerPage = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setOrderBy(state, action) {
      state.orderBy = action.payload;
    },
  },
});

export const { setCarsPerPage, setCurrentPage, setOrderBy } =
  pageSlice.actions;
export const pageReducer = pageSlice.reducer;
