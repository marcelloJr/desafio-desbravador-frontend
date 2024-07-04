import { useState } from "react"
import useFetch from "@/hooks/useFetch"
import { UserDetail } from "@/domain/models/UserDetail"
export default function useUserDetail() {
  const [isFetching, setIsFetching] = useState(true)
  const [notFound, setNotFound] = useState(false)
  const fetcher = useFetch()
  const defaultUserDetail: UserDetail = {
    followers: 0 ,
    following: 0,
    avatar_url: '',
    email: '',
    bio: '',
    name: '',
    created_at: '',
    public_repos: 0,
    location: '',
    html_url: '',
    company: '',
    twitter_username: '',
    login: '',
  }
  const [userDetail, setUserDetail] = useState<UserDetail>(defaultUserDetail)
  const handleCreateAt = (date: string) => {
    return new Intl.DateTimeFormat('pt-BR', {
      dateStyle: 'medium',
      timeStyle: 'short',
    }).format(new Date(date))
  }
  const getGithubUserByUsername = (username: string) => {
    setIsFetching(true)
    setNotFound(false)
    fetcher(`users/${username}`)
      .then(({ data }) => {
        const { 
          followers, 
          following,
          avatar_url, 
          email, 
          bio, 
          name, 
          created_at,
          public_repos,
          location,
          html_url,
          company,
          twitter_username,
          login
        } = data
        setUserDetail({
          followers,
          following,
          avatar_url,
          email: email || 'Não informado',
          bio: bio || 'Não informado',
          name,
          created_at: handleCreateAt(created_at),
          public_repos,
          location: location || 'Não informado',
          html_url,
          company: company || 'Não informado',
          twitter_username: twitter_username || 'Não informado',
          login,
        })
      })
      .catch(() => {
        setNotFound(true)
        setUserDetail(defaultUserDetail)
      })
      .finally(() => {
        setIsFetching(false)
      })
  }
  
  return {
    getGithubUserByUsername,
    userDetail,
    isFetching,
    notFound,
  }
}