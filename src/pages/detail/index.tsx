import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import SearchBar from "./components/SearchBar"
import GithubUserDetail from "./components/UserDetail"

const UserDetail = () => {
  return (
    <Grid2 container spacing={2}>
      <Grid2 xs={12}>
        <SearchBar />
      </Grid2>
      <Grid2 xs={12}>
        <GithubUserDetail />
      </Grid2>
    </Grid2>
  )
}

export default UserDetail