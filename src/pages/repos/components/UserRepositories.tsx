import { useNavigate, useParams } from "react-router-dom"
import useRepos from "../hooks/useRepos"
import { useEffect } from "react"
import { Badge, Box, Card, CardContent, Chip, IconButton, List, ListItem, ListItemButton, ListItemText, Tooltip } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import RepoListSkeleton from "@/components/skeletons/RepoList";
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import ForkLeftIcon from '@mui/icons-material/ForkLeftOutlined';
import BugReportIcon from '@mui/icons-material/BugReportOutlined';
import VisibilityIcon from '@mui/icons-material/VisibilityOutlined';

const UserRepositories = () => {
  const params = useParams()
  const { getReposFromUser, filteredRepos, isFetching } = useRepos()
  const navigate = useNavigate()
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
          <List sx={{ width: '100%', overflow: 'auto', p: 0 }}>
          {filteredRepos.map((repo) => (
            <ListItem sx={{p: 0}}>
              <ListItemButton onClick={() => navigate(`${repo.name}`)}>
                <Grid2 container width={'100%'}>
                  <Grid2 xs={12}>
                    <ListItemText primary={
                      <Box display={'flex'} justifyContent={'space-between'}>
                        {repo.name}
                        <Box>
                          <Tooltip title="Watching">
                            <IconButton size="small">
                              <Badge badgeContent={repo.watchers_count}>
                                <VisibilityIcon fontSize="small"/>
                              </Badge>
                            </IconButton>
                          </Tooltip>
                          <Tooltip title="Issues">
                            <IconButton size="small">
                              <Badge badgeContent={repo.open_issues_count}>
                                <BugReportIcon fontSize="small"/>
                              </Badge>
                            </IconButton>
                          </Tooltip>
                          <Tooltip title="Forks">
                            <IconButton size="small">
                              <Badge badgeContent={repo.forks_count}>
                                <ForkLeftIcon fontSize="small"/>
                              </Badge>
                            </IconButton>
                          </Tooltip>
                          <Tooltip title="Stars">
                            <IconButton size="small">
                              <Badge badgeContent={repo.stargazers_count} >
                                <StarOutlineIcon fontSize="small"/>
                              </Badge>
                            </IconButton>
                          </Tooltip>
                        </Box>
                      </Box>
                  } secondary={repo.description ?? 'Não informado'} />
                  </Grid2>
                  <Grid2 xs={12}>
                  </Grid2>
                  <Grid2 xs={12}>
                    <Chip label={repo.language ?? 'Sem resultado'} size="small" variant="outlined"/>
                    {repo.topics.map((topic) => <Chip label={topic} size="small" sx={{m: .3}}/>)}
                  </Grid2>
                </Grid2>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        }
      </CardContent>
    </Card>
  )
}

export default UserRepositories