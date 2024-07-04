import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import ShortUserDetail from "@/components/ShortUserDetail"
import UserRepositories from "./components/UserRepositories"

const Repos = () => {
  return (
    <Grid2 container spacing={2}>
      <Grid2 xs={12}>
        <ShortUserDetail />
      </Grid2>
      <Grid2 xs={12}>
        <UserRepositories />
      </Grid2>
    </Grid2>
  )
}

export default Repos