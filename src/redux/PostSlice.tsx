import { configureStore, createSlice } from '@reduxjs/toolkit';

import { v4 as uuid } from 'uuid';

export interface PostState {
  value: Post[];
}

export interface Post {
  id: string,
  title: string,
  content: string,
  author: string,
}

// export const store = configureStore({
//   reducer: {
//     posts: postsReducer,
//     authors: authorssReducer
//   }
// });

const initialPostState: Post[] = [
    {
      id: uuid(),
      title: 'Simple tiltle 0',
      content: 'Simple content',
      author: 'I am'
    },
    {
      id: uuid(),
      title: 'Simple 1',
      content: 'Simple content',
      author: 'I am'
    },
    {
      id: uuid(),
      title: 'Simple 2',
      content: 'Simple content',
      author: 'I am'
    },
    {
      id: uuid(),
      title: 'Simple 3',
      content: 'Simple content',
      author: 'I am'
    }
  ]
;

const postsSlice = createSlice({
  name: 'posts',
  initialState: initialPostState,
  reducers: {
    addPost(state, action) {
      state.push({
        id: uuid(),
        ...action.payload
      });
    },
    
    removePost(state, action) {
      state.splice(action.payload.i, 1);
    },

    removePostWithFilterMethod(state, action) {
      return state.filter((post) => post.id !== action.payload.id);
    }
  }
});

export const { addPost, removePost, removePostWithFilterMethod } = postsSlice.actions;

export const store = configureStore({
  reducer: postsSlice.reducer
});
export type RootState = ReturnType<typeof store.getState>


