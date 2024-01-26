export type TPostsStatus = 'onload' | 'success' | 'error'

export type TReaction = 'like' | 'done';

export interface IAction<T> {
  payload: T
}

export type TPost = {
  id: string;
  title: string;
  author: string;
  genre: string;
  content: string;
  reaction: boolean;
  image: string;
};
