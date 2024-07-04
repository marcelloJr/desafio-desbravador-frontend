import useBreakpoint from '@/hooks/useBreakpoint'
import { Avatar, Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { AVATAR_HEIGHT } from "@/constants";
import { UserCardProps } from '.';

const UserIdentification = (
  props: Pick<UserCardProps, 'avatar_url' | 'name' | 'html_url' | 'created_at' | 'login'>
) => {
  const { avatar_url, name, html_url, created_at, login } = props
  const { isXs } = useBreakpoint()
  return (
    <>
      <Grid2 xs={12} sm={2} display={'flex'} justifyContent={'center'}>
        <Avatar src={avatar_url} sx={{ width: AVATAR_HEIGHT, height: AVATAR_HEIGHT }} />
      </Grid2>
      <Grid2
        xs={12}
        sm={10}
        textAlign={isXs ? 'center' : 'left'}
      >
        <Typography variant='h5'>{name}</Typography>
        <Typography
          variant='body2'
          color={'Highlight'}
          sx={{ cursor: 'pointer' }}
          onClick={(e) => {
            e.stopPropagation()
            window.open(html_url, '_blank')
          }}
        >@{login}</Typography>
        <Typography variant='subtitle2' color={'text.secondary'}>Entrou em {created_at}</Typography>
      </Grid2>
    </>
  )
}

export default UserIdentification