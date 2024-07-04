import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useRepoDetail from './hooks/useRepoDetail'
import { RepoIdentification } from './components/RepoIdentification'
import RepoRating from './components/RepoRating'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import RepoDate from './components/RepoDate'
import RepoIdentificationSkeleton from '@/components/skeletons/RepoDetail/RepoIdentificationSkeleton'
import RepoRatingSkeleton from '@/components/skeletons/RepoDetail/RepoRatingSkeleton'
import RepoDateSkeleton from '@/components/skeletons/RepoDetail/RepoDateSkeleton'
import ShortUserDetail from '@/components/ShortUserDetail'
const RepoDetail = () => {
  const params = useParams()
  const { getUserRepoByName, isFetching, userRepoDetail } = useRepoDetail()
  useEffect(() => {
    if (params.user && params.repo) {
      getUserRepoByName(params.user, params.repo)
    }
  }, [params])
  return (
    <Grid2 container spacing={2}>
      <Grid2 xs={12}>
        <ShortUserDetail />
      </Grid2>
      <Grid2 xs={12}>
        {isFetching && <RepoIdentificationSkeleton />}
        {!isFetching && <RepoIdentification {...userRepoDetail} /> }
      </Grid2>
      <Grid2 xs={12}>
        {isFetching && <RepoRatingSkeleton />}
        {!isFetching && <RepoRating {...userRepoDetail} /> }
      </Grid2>
      <Grid2 xs={12}>
        {isFetching && <RepoDateSkeleton />}
        {!isFetching && <RepoDate {...userRepoDetail} /> }
      </Grid2>
    </Grid2>
  )
}

export default RepoDetail