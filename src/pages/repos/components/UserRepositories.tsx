/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate, useParams } from "react-router-dom"
import useRepos from "../hooks/useRepos"
import { useEffect, useState } from "react"
import { 
  Badge,Box, Card, CardContent, Chip, FormControl, 
  IconButton, InputLabel, List, ListItem, ListItemButton, 
  ListItemText, MenuItem, Paper, Popover, Select, Typography 
} from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import RepoListSkeleton from "@/components/skeletons/RepoList";
import FilterListIcon from '@mui/icons-material/FilterList';

const UserRepositories = () => {
  const params = useParams()
  const { getReposFromUser, filteredRepos, isFetching, 
    filters, setFilters, countFilterApplied } = useRepos()
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    if (params && params?.user) getReposFromUser(params.user)
  }, [params])
  return (
    <Card>
      <CardContent 
        sx={{
          p: 0,
          ':last-child': {
            pb: 0,
          }
        }}>
        {isFetching && (
          <>
            <RepoListSkeleton />
            <RepoListSkeleton />
            <RepoListSkeleton />
          </>
        )}
        {!isFetching &&
          <Box>
            <Box p={2} display={'flex'} justifyContent={'space-between'}>
              <Typography variant='h6'>Meus repositórios</Typography>
              <Badge badgeContent={countFilterApplied} color="info">
                <IconButton onClick={handleClick}>
                  <FilterListIcon />
                </IconButton>
              </Badge>
            </Box>
            <Popover
              open={open}
              onClose={handleClose}
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <Paper variant="outlined">
                <Grid2 container gap={2} p={2} width={200}>
                  <Grid2 xs={12}>
                    <Typography variant='h6'>Filtros</Typography>
                  </Grid2>
                  <Grid2 xs={12}>
                    <FormControl fullWidth>
                      <InputLabel size="small">Stars</InputLabel>
                      <Select
                        value={filters.stars}
                        label="Stars"
                        onChange={(e) => {
                          setFilters(prev => ({ ...prev, stars: e.target.value }))
                        }}
                      >
                        <MenuItem value={'asc'}>Asc</MenuItem>
                        <MenuItem value={'desc'}>Desc</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid2>
                </Grid2>
              </Paper>
            </Popover>
            <List sx={{ width: '100%', overflow: 'auto', p: 0 }}>
              {filteredRepos.map((repo: any) => (
                <ListItem sx={{ p: 0 }}>
                  <ListItemButton onClick={() => navigate(`${repo.name}`)}>
                    <Grid2 container width={'100%'}>
                      <Grid2 xs={12}>
                        <ListItemText primary={
                          <Box display={'flex'} justifyContent={'space-between'}>
                            {repo.name}
                          </Box>
                        } secondary={repo.description ?? 'Não informado'} />
                      </Grid2>
                      <Grid2 xs={12}>
                      </Grid2>
                      <Grid2 xs={12}>
                        <Chip label={repo.language ?? 'Sem resultado'} size="small" variant="outlined" />
                        {repo.topics.map((topic: any) => <Chip label={topic} size="small" sx={{ m: .3 }} />)}
                      </Grid2>
                    </Grid2>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        }
      </CardContent>
    </Card>
  )
}

export default UserRepositories