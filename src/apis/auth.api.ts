import type { Blog } from "@/types/Blog"
import http from "@/utils/http"

const URL = 'login'
const authApi = {
  login({username, password}: {username: string, password: string}) {
    return http.post(URL, {username, password})
  }
}

export default authApi