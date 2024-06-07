import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
  name: "root",
  initialState: {
    loading: false,
    portfoliodata: null,
    reloadData:false,
  },
  reducers: {
    showLoading: (state) => {
      state.loading = true;
    },
    hideLoading: (state) => {
      state.loading = false;
    },
    SetportfolioData: (state, action) => {
      state.portfoliodata = action.payload;
    },
    ReloadData: (state, action) => {
      state.reloadData= action.payload;
    },
  },
});

export default rootSlice.reducer;
export const { showLoading, hideLoading, SetportfolioData, ReloadData } = rootSlice.actions;
