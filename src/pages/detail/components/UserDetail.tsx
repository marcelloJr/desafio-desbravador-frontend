import { Card, CardContent } from "@mui/material"
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom"
import useUserDetail from "../hooks/useUserDetail";
import UserCard from "@/components/UserCard";
import UserCardSkeleton from "@/components/skeletons/UseCard";
import UserNotFound from "@/components/UserNotFound";

const GithubUserDetail = () => {
  const [searchParams] = useSearchParams();
  const { isFetching, getGithubUserByUsername, userDetail, notFound } = useUserDetail()
  const username = searchParams.get('username');
  const isEmpty = !username || username === ''
  const hasResult = !isEmpty && !notFound && !isFetching
  const hasPublicRepo = userDetail?.public_repos > 0
  const navigate = useNavigate()
  const enableToClick = hasResult && hasPublicRepo

  useEffect(() => {
    if (username && username !== '') getGithubUserByUsername(username)
  }, [username])
  return (
    <>
      {!isEmpty &&
        <Card 
          onClick={() => {
            if (enableToClick) {
              navigate(`${userDetail.login}/repos`)
            }
          }}
          sx={{
            cursor: enableToClick ? 'pointer' : 'default',
          }}
        >
          <CardContent>
            {notFound && <UserNotFound /> }
            {isFetching && <UserCardSkeleton />}
            {hasResult && <UserCard {...userDetail} />}
          </CardContent>
        </Card>
      }
   </>
  )
}

export default GithubUserDetail