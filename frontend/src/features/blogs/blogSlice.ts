import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Blog } from '../../types/types'

interface BlogState {
    blogs: Blog[];

}

const initialState: BlogState = {
    blogs: [],
}

const blogSlice = createSlice({
    name: "blog",
    initialState,
    reducers: {
      addBlog: (state, action: PayloadAction<Blog>) => {
        state.blogs.push(action.payload);
      },
      removeBlog: (state, action: PayloadAction<number>) => {
        state.blogs = state.blogs.filter((blog) => blog.id !== action.payload);
      },
      updateBlog: (state, action: PayloadAction<Blog>) => {
        const index = state.blogs.findIndex((blog) => blog.id === action.payload.id);
        if (index !== -1) {
          state.blogs[index] = action.payload;
        }
      },
    },
  });
  
  export const { addBlog, removeBlog, updateBlog } = blogSlice.actions;
  
  export default blogSlice.reducer;