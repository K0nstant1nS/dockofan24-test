import { createAsyncThunk } from "@reduxjs/toolkit";
import { v4 as uuid } from 'uuid';
import Api from "../../api";
import { TPost } from "../../utils/types";


export const getPosts = createAsyncThunk('posts/getPosts', async ()=>{
  const data = await Api.getPosts(100);
  return data.data.map((item: TPost) => ({...item, reaction: false, id: uuid()}));
})
