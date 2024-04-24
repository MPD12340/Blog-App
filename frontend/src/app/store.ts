import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "../features/sidebar/sidebarSlice";
import blogReducer from '../features/blogs/blogSlice'

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    blog: blogReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
