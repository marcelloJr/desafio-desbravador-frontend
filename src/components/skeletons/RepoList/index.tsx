import { Box, Skeleton } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"

const RepoListSkeleton = () => {
  return (
    <Grid2 container p={1.5}>
      <Grid2 xs={12} display={'flex'} justifyContent={'space-between'}>
        <Skeleton variant='text' sx={{height: '1rem', width: '60%'}}/>
        <Box sx={{width: 120}} display={'flex'} justifyContent={'space-between'}>
          <Skeleton variant='circular' sx={{height: '1.7rem', width: '23%'}}/>
          <Skeleton variant='circular' sx={{height: '1.7rem', width: '23%'}}/>
          <Skeleton variant='circular' sx={{height: '1.7rem', width: '23%'}}/>
          <Skeleton variant='circular' sx={{height: '1.7rem', width: '23%'}}/>
        </Box>
      </Grid2>
      <Grid2 xs={12}>
        <Skeleton variant='text' sx={{height: '.75rem'}}/>
        <Skeleton variant='text' sx={{height: '.75rem'}}/>
      </Grid2>
      <Grid2 xs={12} display={'flex'} mt={1}>
        <Skeleton variant='rounded' sx={{height: '1rem', width: '3rem', borderRadius: 16}}/>
        <Skeleton variant='rounded' sx={{height: '1rem', width: '3rem', borderRadius: 16, ml: 1}}/>
        <Skeleton variant='rounded' sx={{height: '1rem', width: '3rem', borderRadius: 16, ml: 1}}/>
      </Grid2>
    </Grid2>
  )
}

export default RepoListSkeleton