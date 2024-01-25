/* eslint-disable @typescript-eslint/ban-ts-comment */
import { TPost, TPostsStatus, IAction } from '../../utils/types'
import { createSlice } from '@reduxjs/toolkit'
import { getPosts } from '../actions/posts';

export type TPostsState = {
  data: TPost[];
  status?: TPostsStatus;
}

const initialState:TPostsState = {
  data: [],
} 

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPostsOnload(state){
      state.status = 'onload'
    },
    toggleLike(state, action: IAction<string>){
      const post = state.data.find((item) => item.id === action.payload)
      if(post) {
        post.reaction = !post.reaction
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getPosts.pending, (state) => {
      if(state.status === 'success'){
        return
      }
      state.status = 'onload'
    })
    .addCase(getPosts.fulfilled, (state, action) => {
      state.data = action.payload
      state.status = "success"
    })
    .addCase(getPosts.rejected, (state) => {
      state.status = 'error'
    })
  }
})

export const postsReducer = postsSlice.reducer;
export const postsActions = postsSlice.actions;
