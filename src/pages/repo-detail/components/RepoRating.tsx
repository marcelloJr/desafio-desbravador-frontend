import { Badge, Card, CardContent, Typography } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import ForkLeftIcon from '@mui/icons-material/ForkLeftOutlined';
import BugReportIcon from '@mui/icons-material/BugReportOutlined';
import VisibilityIcon from '@mui/icons-material/VisibilityOutlined';

interface Props {
  stargazers_count?: number
  forks_count?: number
  open_issues_count?: number
  watchers_count?: number
}
const RepoRating = (props: Props) => {
  return (
    <Card>
      <CardContent>
        <Grid2 container spacing={2}>
          <Grid2 xs={6} sm={3} textAlign={'center'}>
            <Badge>
              <StarOutlineIcon />
            </Badge>
            <Typography ml={.5} variant="caption">Stars</Typography>
            <Typography variant="h4" fontWeight={'bold'}>{props.stargazers_count}</Typography>
          </Grid2>
          <Grid2 xs={6} sm={3} textAlign={'center'}>
            <Badge>
              <ForkLeftIcon />
            </Badge>
            <Typography ml={.5} variant="caption">Forks</Typography>
            <Typography variant="h4" fontWeight={'bold'}>{props.forks_count}</Typography>
          </Grid2>
          <Grid2 xs={6} sm={3} textAlign={'center'}>
            <Badge>
              <BugReportIcon />
            </Badge>
            <Typography ml={.5} variant="caption">Issues</Typography>
            <Typography variant="h4" fontWeight={'bold'}>{props.open_issues_count}</Typography>
          </Grid2>
          <Grid2 xs={6} sm={3} textAlign={'center'}>
            <Badge>
              <VisibilityIcon />
            </Badge>
            <Typography ml={.5} variant="caption">Watching</Typography>
            <Typography variant="h4" fontWeight={'bold'}>{props.watchers_count}</Typography>
          </Grid2>
        </Grid2>
      </CardContent>
    </Card>
  )
}

export default RepoRating