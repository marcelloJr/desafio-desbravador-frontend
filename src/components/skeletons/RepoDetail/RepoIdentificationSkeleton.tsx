import { Box, Card, CardActions, CardContent, Skeleton } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"

const RepoIdentificationSkeleton = () => {
  return (
    <Card>
      <CardContent>
        <Grid2 container spacing={2}>
          <Grid2 xs={8}>
            <Skeleton variant="text" width={80} height={20} />
            <Skeleton variant="text" width={'100%'} height={32} />
          </Grid2> 
          <Grid2 xs={4}>
            <Skeleton variant="text" width={80} height={20} />
            <Skeleton variant="text" width={'100%'} height={32} />
          </Grid2>
          <Grid2 xs={12}>
            <Skeleton variant="text" width={80} height={20} />
            <Skeleton variant="text" width={'100%'} height={32} />
          </Grid2>  
          <Grid2 xs={12}>
            <Skeleton variant="text" width={80} height={20} />
            <Box sx={{width: '100%'}} display={'flex'}>
              <Skeleton variant='rounded' sx={{ width: 80}}/>
              <Skeleton variant='rounded' sx={{ width: 80, ml: 1 }} />
              <Skeleton variant='rounded' sx={{ width: 80, ml: 1 }} />
            </Box>
          </Grid2> 
        </Grid2>
      </CardContent>
      <CardActions>
        <Skeleton variant="text" width={'100%'} height={48} />
      </CardActions>
    </Card>
  )
}

export default RepoIdentificationSkeleton
