import { Card, CardContent, Skeleton } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"

const RepoRatingSkeleton = () => {
  return (
    <Card>
      <CardContent>
        <Grid2 container spacing={2}>
          <Grid2 xs={6} sm={3} display={'flex'} flexDirection={'column'} alignItems={'center'}>
            <Skeleton variant="text" width={80} height={24} />
            <Skeleton variant="text" width={32} height={48} />
          </Grid2>
          <Grid2 xs={6} sm={3} display={'flex'} flexDirection={'column'} alignItems={'center'}>
            <Skeleton variant="text" width={80} height={24} />
            <Skeleton variant="text" width={32} height={48} />
          </Grid2>
          <Grid2 xs={6} sm={3} display={'flex'} flexDirection={'column'} alignItems={'center'}>
            <Skeleton variant="text" width={80} height={24} />
            <Skeleton variant="text" width={32} height={48} />
          </Grid2>
          <Grid2 xs={6} sm={3} display={'flex'} flexDirection={'column'} alignItems={'center'}>
            <Skeleton variant="text" width={80} height={24} />
            <Skeleton variant="text" width={32} height={48} />
          </Grid2>
        </Grid2>
      </CardContent>
    </Card>
  )
}

export default RepoRatingSkeleton