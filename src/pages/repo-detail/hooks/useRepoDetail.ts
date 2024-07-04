import { UserRepoDetail } from "@/domain/models/UserRepoDetail"
import useFetch from "@/hooks/useFetch"
import { useState } from "react"

export default function useRepoDetail() {
  const [isFetching, setIsFetching] = useState(true)
  const [notFound, setNotFound] = useState(false)
  const fetcher = useFetch()
  const [userRepoDetail, setUserRepoDetail] = useState<UserRepoDetail | null>(null)

  const getUserRepoByName = (username: string, repo: string) => {
    setIsFetching(true)
    setNotFound(false)
    fetcher(`repos/${username}/${repo}`)
      .then(({ data }) => {
        setUserRepoDetail(data)
      })
      .catch(() => {
        setNotFound(true)
      })
      .finally(() => {
        setIsFetching(false)
      })
  }

  return {
    getUserRepoByName,
    userRepoDetail,
    isFetching,
    notFound,
  }
}