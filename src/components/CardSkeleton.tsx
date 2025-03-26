import globalStyles from "@/lib/styles";
import { Card, CardContent, CardActions, Skeleton } from "@mui/material";

export default function CardSkeleton() {
  return (
    <Card sx={globalStyles.blogsListCard}>
      <CardContent sx={{ flexGrow: 1 }}>
        <Skeleton variant="text" width="80%" height={30} />
        <Skeleton variant="text" width="100%" height={20} />
        <Skeleton variant="text" width="90%" height={20} />
        <Skeleton variant="text" width="60%" height={20} />
      </CardContent>
      <CardActions sx={{ mt: "auto", ml: "8px" }}>
        <Skeleton variant="rectangular" width={80} height={30} />
      </CardActions>
    </Card>
  );
}