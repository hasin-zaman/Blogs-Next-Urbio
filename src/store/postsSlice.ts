import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Post } from "@/types/post";
import { jsonPlaceholderApi } from "@/services/jsonPlaceholderApi";

interface PostsState {
  posts: Post[];
}

const initialState: PostsState = {
  posts: [],
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<Post[]>) => {
      state.posts = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      jsonPlaceholderApi.endpoints.getPostsWithAuthors.matchFulfilled,
      (state, action) => {
        state.posts = action.payload;
      }
    );
  },
});

export const { setPosts } = postsSlice.actions;
export default postsSlice.reducer;