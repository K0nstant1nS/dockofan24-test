import { configureStore } from "@reduxjs/toolkit";
import { postsReducer } from "../reducers/posts";

export const store = configureStore({
  reducer: {
    posts: postsReducer
  },
  devTools: true
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
