'use client'

import { Button, Typography, Box, Card, CardContent, CardActions } from "@mui/material";
import { useRouter } from "next/navigation";
import globalStyles from "@/lib/styles";
import { useGetPostsWithAuthorsQuery } from "@/services/jsonPlaceholderApi";
import { Post } from "@/types/post";
import CardSkeleton from "./CardSkeleton";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { setPosts } from "@/store/postsSlice";

export default function BlogsList() {
  const router = useRouter();
  const dispatch = useDispatch();
  const posts = useSelector((state: RootState) => state.posts.posts);

  const { data, error, isLoading } = useGetPostsWithAuthorsQuery(undefined, {
    skip: posts.length > 0,
  });

  if (data && posts.length === 0) {
    dispatch(setPosts(data));
  }

  if (isLoading && posts.length === 0) {
    return (
      <Box sx={{ mb: "40px", ...globalStyles.flexWrap }}>
        {Array.from({ length: 4 }).map((_, index) => (
          <CardSkeleton key={index} />
        ))}
      </Box>
    );
  }

  if (error || (!data && posts.length === 0)) return <p>Unable to fetch data.</p>;

  return (
    <Box sx={{ mb: "40px", ...globalStyles.flexWrap }}>
      {posts.map((post: Post) => (
        <Card key={post.id} sx={{ justifyContent: "space-between", ...globalStyles.blogsListCard }}>
          <CardContent>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              {post.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              {post.body.length > 100 ? post.body.substring(0, 100) + "..." : post.body}
            </Typography>
            <Typography variant="caption" fontStyle="italic" sx={{ display: "block", mb: 1 }}>
              - {post.author}
            </Typography>
          </CardContent>
          <CardActions sx={{ mt: "auto" }}>
            <Button
              variant="outlined"
              size="small"
              onClick={() => router.push(`/blogs/${post.id}`)}
            >
              Read More
            </Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
}