import { Box } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Skeleton from "@mui/material/Skeleton";
import UserIdentificationSkeleton from "./Identification";

const UserCardSkeleton = () => {
  return (
    <Grid2 container spacing={2}>
      <UserIdentificationSkeleton />
      <Grid2 xs={12}>
        <Box display={'flex'} justifyContent={'center'}>
          <Skeleton variant='text' width={28} height={'1.2rem'} />
        </Box>
        <Skeleton variant='text' width={'100%'} height={'1.8rem'} />
      </Grid2>
      <Grid2 xs={4}>
        <Box display={'flex'} justifyContent={'center'}>
          <Skeleton variant='text' width={88} height={'1rem'} />
        </Box>
        <Box display={'flex'} justifyContent={'center'}>
          <Skeleton variant='text' width={16} height={'2rem'} />
        </Box>
      </Grid2>
      <Grid2 xs={4} textAlign={'center'}>
        <Box display={'flex'} justifyContent={'center'}>
          <Skeleton variant='text' width={88} height={'1rem'} />
        </Box>
        <Box display={'flex'} justifyContent={'center'}>
          <Skeleton variant='text' width={16} height={'2rem'} />
        </Box>
      </Grid2>
      <Grid2 xs={4} textAlign={'center'}>
        <Box display={'flex'} justifyContent={'center'}>
          <Skeleton variant='text' width={88} height={'1rem'} />
        </Box>
        <Box display={'flex'} justifyContent={'center'}>
          <Skeleton variant='text' width={16} height={'2rem'} />
        </Box>
      </Grid2>
      <Grid2 xs={6} display={'flex'} alignItems={'center'}>
        <Skeleton variant='text' width={'100%'} height={'1rem'} sx={{ml: 1}} />
      </Grid2>
      <Grid2 xs={6} display={'flex'} alignItems={'center'}>
        <Skeleton variant='text' width={'100%'} height={'1rem'} sx={{ml: 1}} />
      </Grid2>
      <Grid2 xs={6} display={'flex'} alignItems={'center'}>
        <Skeleton variant='text' width={'100%'} height={'1rem'} sx={{ml: 1}} />
      </Grid2>
      <Grid2 xs={6} display={'flex'} alignItems={'center'}>
        <Skeleton variant='text' width={'100%'} height={'1rem'} sx={{ml: 1}} />
      </Grid2>
    </Grid2>
  )
}

export default UserCardSkeleton