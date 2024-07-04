import useBreakpoint from '@/hooks/useBreakpoint'
import { Avatar, Skeleton } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { AVATAR_HEIGHT } from "@/constants";

const UserIdentificationSkeleton = () => {
  const { isXs } = useBreakpoint()
  return (
    <>
      <Grid2 xs={12} sm={2} display={'flex'} justifyContent={'center'}>
        <Skeleton variant='circular'>
          <Avatar sx={{ width: AVATAR_HEIGHT, height: AVATAR_HEIGHT }} />
        </Skeleton>
      </Grid2>
      <Grid2
        xs={12}
        sm={10}
        textAlign={isXs ? 'center' : 'left'}
      >
        <Skeleton variant='text' width={'100%'} height={'2rem'} />
        <Skeleton variant='text' width={'30%'} height={'1.2rem'} />
        <Skeleton variant='text' width={'55%'} height={'1.2rem'} />
      </Grid2>
    </>
  )
}

export default UserIdentificationSkeleton