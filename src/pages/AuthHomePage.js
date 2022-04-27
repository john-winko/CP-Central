import { useEffect, useState } from "react"
import { useAxios } from "../utils/useAxios"

export default function AuthHomePage() {
  const [user, setUser] = useState(null)
  const backend = useAxios()

  useEffect(() => {
    backend.get('/api/v1/user/whoami/')
      .then((response) => {
        setUser(response.data)
      })
  }, [])

  return (
    <div>
      <h1>This is the Authenticated landing page</h1>
      <p>username: {user && user.username}</p>
      <p>date_joined: {user && user.date_joined}</p>
    </div>
  )
}
