"use client";

import { Button, Typography, Box } from "@mui/material";
import { useRouter } from "next/navigation";
import globalStyles from '@/lib/styles'

export default function Hero() {
  const router = useRouter();

  return (
    <Box sx={{ height: "70vh", ...globalStyles.flexCenter }}>
      <Box sx={globalStyles.flexColumnCenter}>
        <Typography variant="h1" sx={{ mb: 2 }}>Blogs</Typography>
        <Button variant="contained" sx={{ width: 150 }} onClick={() => router.push('/blogs/post')}>
          Post Blog
        </Button>
      </Box>
    </Box>
  );
}