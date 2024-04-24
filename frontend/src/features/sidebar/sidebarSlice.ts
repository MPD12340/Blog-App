import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SidebarState {
  isSidebarOpen: boolean;
}

const initialState: SidebarState = {
  isSidebarOpen: false,
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    showSidebar: (state) => {
      state.isSidebarOpen = true;
    },
    hideSidebar: (state) => {
      state.isSidebarOpen = false;
    },
  },
});

export const {showSidebar,hideSidebar } = sidebarSlice.actions;

export default sidebarSlice.reducer;
