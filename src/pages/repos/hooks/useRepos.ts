import { UserRepositories } from "@/domain/models/UserRepositories"
import useFetch from "@/hooks/useFetch"
import { useState } from "react"

export default function useRepos() {
  const [isFetching, setIsFetching] = useState(false)
  const [notFound, setNotFound] = useState(false)
  const [userRepos, setUserRepos] = useState([])
  const fetcher = useFetch()
  const filteredRepos: UserRepositories[] = 
    userRepos.sort((a: UserRepositories, b: UserRepositories) => 
      b.stargazers_count - a.stargazers_count);
  const getReposFromUser = (username: string) => {
    setIsFetching(true)
    setNotFound(false)
    fetcher(`users/${username}/repos`)
      .then(({ data }) => {
        setUserRepos(data)
      })
      .catch(() => {
        setNotFound(true)
      })
      .finally(() => {
        setIsFetching(false)
      })
  }
  return {
    getReposFromUser,
    filteredRepos,
    userRepos,
    isFetching,
    notFound,
  }
}