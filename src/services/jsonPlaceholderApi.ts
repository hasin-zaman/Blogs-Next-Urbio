import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Post } from "@/types/post";
import { User } from "@/types/user";

export const jsonPlaceholderApi = createApi({
  reducerPath: "jsonPlaceholderApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com" }),
  endpoints: (builder) => ({
    getPostsWithAuthors: builder.query<Post[], void>({
      query: () => "posts",
      keepUnusedDataFor: 300,
      async transformResponse(response: Post[]) {
        const usersResponse = await fetch('https://jsonplaceholder.typicode.com/users');
        const users: User[] = await usersResponse.json();

        return response.map((post: Post) => {
          const user = users.find(user => user.id === post.userId);
          return { ...post, author: user?.name || 'Unknown' };
        });
      },
    }),
    createPost: builder.mutation<Post, Partial<Post>>({
      query: (newPost) => ({
        url: "posts",
        method: "POST",
        body: newPost,
      }),
    }),
  }),
});

export const { useGetPostsWithAuthorsQuery, useCreatePostMutation } = jsonPlaceholderApi;