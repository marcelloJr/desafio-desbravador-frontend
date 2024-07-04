import axios from "axios";
export default function useFetch() {
  const instance = axios.create({
    baseURL: import.meta.env.VITE_APP_API_URL,
    headers: {
      Authorization: import.meta.env.VITE_APP_GITHUB_TOKEN
    }
  })

  return instance
}