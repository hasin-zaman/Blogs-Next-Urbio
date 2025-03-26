"use client";

import { useParams, useRouter } from "next/navigation";
import { Typography, Box, Card, CardContent, Button } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export default function BlogPage() {
  const params = useParams();
  const router = useRouter();

  const postId = Number(params.id);
  const blog = useSelector((state: RootState) =>
    state.posts.posts.find((post) => post.id === postId)
  );

  if (!blog) {
    return (
      <Box sx={{ textAlign: "center", mt: 6 }}>
        <Typography variant="h5" color="error">
          Blog post not found.
        </Typography>
        <Button variant="contained" sx={{ mt: 2 }} onClick={() => router.push("/")}>
          Back to Blogs
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 6, px: 2 }}>
      <Card sx={{ maxWidth: 800, padding: 4, borderRadius: "12px", boxShadow: 4 }}>
        <CardContent>
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            {blog.title}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ fontSize: "1.1rem", lineHeight: 1.8, mb: 3 }}
          >
            {blog.body}
          </Typography>
          <Typography variant="subtitle1" fontStyle="italic" sx={{ color: "gray" }}>
            - {blog.author}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}