import { useEffect } from "react";
import useUserDetail from "@/pages/detail/hooks/useUserDetail";
import { useParams } from "react-router-dom";
import { Card, CardContent } from "@mui/material";
import UserIdentification from "@/components/UserCard/UserIdentification";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import UserIdentificationSkeleton from "@/components/skeletons/UseCard/Identification";

const ShortUserDetail = () => {
  const params = useParams()
  const { getGithubUserByUsername, userDetail, isFetching } = useUserDetail()
  useEffect(() => {
    if (params && params?.user) getGithubUserByUsername(params.user)
  }, [params]) 
  return (
    <Card>
      <CardContent>
        <Grid2 container spacing={2}>
          {isFetching && <UserIdentificationSkeleton />}
          {!isFetching && <UserIdentification {...userDetail} />}
        </Grid2>
      </CardContent>
    </Card>
  )
}

export default ShortUserDetail