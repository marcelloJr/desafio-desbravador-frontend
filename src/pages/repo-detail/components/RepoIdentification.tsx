import { Button, Card, CardActions, CardContent, Chip, Typography } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"

interface Props {
  name?: string
  description?: string
  language?: string
  topics?: string[]
  html_url?: string
}
export const RepoIdentification = (props: Props) => {
  const hasTopic = props?.topics && props.topics.length > 0
  return (
    <Card>
      <CardContent>
        <Grid2 container spacing={2}>
          <Grid2 xs={8}>
            <Typography variant='caption'>Repositório</Typography>
            <Typography variant="h6" fontWeight={'bold'}>{props.name}</Typography>
          </Grid2> 
          <Grid2 xs={4}>
            <Typography variant='caption'>Linguagem</Typography>
            <Typography variant="h6" fontWeight={'bold'}>{props.language ?? 'Não informada'}</Typography>
          </Grid2>
          <Grid2 xs={12}>
            <Typography variant='caption'>Descrição</Typography>
            <Typography variant="h6" fontWeight={'bold'}>{props.description ?? 'Não informado'}</Typography>
          </Grid2>  
          <Grid2 xs={12}>
            <Typography variant='caption'>Tópicos</Typography>
            {hasTopic ? 
              <div>{props.topics?.map((topic) => <Chip label={topic} size="small" sx={{m: .3}}/>)}</div>:
              <Typography variant="h6" fontWeight={'bold'}>Não informado</Typography>
            }
          </Grid2> 
        </Grid2>
      </CardContent>
      <CardActions>
        <Button variant="outlined" size="small" onClick={() => window.open(props.html_url, '_blank')} fullWidth>Abrir no Github</Button>
      </CardActions>
    </Card>
  )
}
