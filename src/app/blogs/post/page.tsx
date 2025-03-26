"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Box, Card, CardContent, Typography, TextField, Button, CircularProgress, Alert } from "@mui/material";
import { useCreatePostMutation } from "@/services/jsonPlaceholderApi";

export default function CreatePost() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [createPost, { isLoading, isSuccess, isError }] = useCreatePostMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if(!title.trim() || !body.trim()) return;

    await createPost({
      title,
      body,
      userId: 1,
    });

    setTitle("");
    setBody("");
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: 6, px: 2 }}>
      <Card sx={{ maxWidth: 600, padding: 4, borderRadius: "12px", boxShadow: 4 }}>
        <CardContent>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Create a New Post
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Title"
              variant="outlined"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Body"
              variant="outlined"
              multiline
              rows={4}
              value={body}
              onChange={(e) => setBody(e.target.value)}
              required
              sx={{ mb: 3 }}
            />

            <Button type="submit" variant="contained" color="primary" fullWidth disabled={isLoading}>
              {isLoading ? <CircularProgress size={24} color="inherit" /> : "Submit Post"}
            </Button>

            {isSuccess && (
              <Alert severity="success" sx={{ mt: 2 }}>
                Post created successfully!
              </Alert>
            )}

            {isError && (
              <Alert severity="error" sx={{ mt: 2 }}>
                Failed to create post.
              </Alert>
            )}
          </form>

          <Button onClick={() => router.push("/")} sx={{ mt: 3 }}>
            Back to Blogs
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}