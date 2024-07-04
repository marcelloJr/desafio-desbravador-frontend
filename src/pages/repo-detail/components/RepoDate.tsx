import { Card, CardContent, Typography } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"

interface Props {
  created_at?: string
  pushed_at?: string
}
const RepoDate = (props: Props) => {
  const handleDate = (date?: string) => {
    if (!date) return 'Não informado'
    return new Intl.DateTimeFormat('pt-BR', {
      dateStyle: 'medium',
      timeStyle: 'short',
    }).format(new Date(date))
  }
  return (
    <Card>
      <CardContent>
        <Grid2 container spacing={2}>
          <Grid2 xs={6}>
            <Typography variant='caption'>Criado em</Typography>
            <Typography>{handleDate(props.created_at)}</Typography>
          </Grid2>
          <Grid2 xs={6}>
            <Typography variant='caption'>Ultimo push</Typography>
            <Typography>{handleDate(props.pushed_at)}</Typography>
          </Grid2> 
        </Grid2>
      </CardContent>
    </Card>
  )
}

export default RepoDate