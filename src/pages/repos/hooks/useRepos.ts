import { UserRepositories } from "@/domain/models/UserRepositories"
import useFetch from "@/hooks/useFetch"
import { useEffect, useState } from "react"

export default function useRepos() {
  const [isFetching, setIsFetching] = useState(false)
  const [notFound, setNotFound] = useState(false)
  const [filteredRepos, setFilteredRepos] = useState([])
  const [filters, setFilters] = useState({
    stars: 'desc',
    forks: '',
  })
  const countFilterApplied = Object.values(filters).filter(Boolean).length
  const fetcher = useFetch()
  const getReposFromUser = (username: string) => {
    setIsFetching(true)
    setNotFound(false)
    fetcher(`users/${username}/repos`)
      .then(({ data }) => {
        setFilteredRepos(data.sort(filterByStars))
      })
      .catch(() => {
        setNotFound(true)
      })
      .finally(() => {
        setIsFetching(false)
      })
  }

  const filterByStars = (a: UserRepositories, b: UserRepositories) => {
    if (filters.stars === 'asc') {
      return a.stargazers_count - b.stargazers_count
    }
    return b.stargazers_count - a.stargazers_count
  }

  useEffect(() => {
    if (filters.stars !== '') {
      setFilteredRepos(filteredRepos.sort(filterByStars))
    }
  }, [filters])
  return {
    getReposFromUser,
    filteredRepos,
    isFetching,
    notFound,
    filters,
    setFilters,
    countFilterApplied,
  }
}