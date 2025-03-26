import { configureStore } from "@reduxjs/toolkit";
import { jsonPlaceholderApi } from "@/services/jsonPlaceholderApi";
import postsReducer from "@/store/postsSlice";

export const store = configureStore({
  reducer: {
    [jsonPlaceholderApi.reducerPath]: jsonPlaceholderApi.reducer,
    posts: postsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jsonPlaceholderApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;