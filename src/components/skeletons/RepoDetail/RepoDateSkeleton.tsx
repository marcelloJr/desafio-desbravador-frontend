import { Card, CardContent, Skeleton } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"

const RepoDateSkeleton = () => {
  return (
    <Card>
      <CardContent>
        <Grid2 container spacing={2}>
          <Grid2 xs={6}>
            <Skeleton variant="text" width={80} height={20} />
            <Skeleton variant="text" width={'100%'} height={32} />
          </Grid2>
          <Grid2 xs={6}>
            <Skeleton variant="text" width={80} height={20} />
            <Skeleton variant="text" width={'100%'} height={32} />
          </Grid2> 
        </Grid2>
      </CardContent>
    </Card>
  )
}

export default RepoDateSkeleton