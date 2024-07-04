import { Typography } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import ApartmentIcon from '@mui/icons-material/Apartment';
import XIcon from '@mui/icons-material/X';
import UserIdentification from "./UserIdentification";

export interface UserCardProps {
  followers: number
  following: number
  avatar_url: string
  email: string
  bio: string
  name: string
  created_at: string
  public_repos: number
  location: string
  html_url: string
  company: string
  twitter_username: string
  login: string
}
const UserCard = (props: UserCardProps) => {
  const {
    followers,
    following,
    email,
    bio,
    public_repos,
    location,
    company,
    twitter_username,
    ...rest
  } = props;
  
  return (
    <Grid2 container spacing={2}>
      <UserIdentification {...rest} />
      <Grid2 xs={12} textAlign={'center'}>
        <Typography variant='caption'>Bio</Typography>
        <Typography>{bio}</Typography>
      </Grid2>
      <Grid2 xs={4} textAlign={'center'}>
        <Typography variant='caption'>Repositórios</Typography>
        <Typography fontWeight={'bold'}>{public_repos}</Typography>
      </Grid2>
      <Grid2 xs={4} textAlign={'center'}>
        <Typography variant='caption'>Seguidores</Typography>
        <Typography fontWeight={'bold'}>{followers}</Typography>
      </Grid2>
      <Grid2 xs={4} textAlign={'center'}>
        <Typography variant='caption'>Seguindo</Typography>
        <Typography fontWeight={'bold'}>{following}</Typography>
      </Grid2>
      <Grid2 xs={6} display={'flex'} alignItems={'center'}>
        <LocationOnIcon color="action" fontSize={'small'} />
        <Typography variant='caption' ml={1}>{location}</Typography>
      </Grid2>
      <Grid2 xs={6} display={'flex'} alignItems={'center'}>
        <EmailIcon color="action" fontSize={'small'} />
        <Typography variant='caption' ml={1}>{email}</Typography>
      </Grid2>
      <Grid2 xs={6} display={'flex'} alignItems={'center'}>
        <ApartmentIcon color="action" fontSize={'small'} />
        <Typography variant='caption' ml={1}>{company}</Typography>
      </Grid2>
      <Grid2 xs={6} display={'flex'} alignItems={'center'}>
        <XIcon color="action" fontSize={'small'} />
        <Typography variant='caption' ml={1}>{twitter_username}</Typography>
      </Grid2>
    </Grid2>
  )
}

export default UserCard