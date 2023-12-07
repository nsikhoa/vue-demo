import type { Blog } from '@/types/Blog'
import http from '@/utils/http'

const URL = 'blogs'
const blogApi = {
  getBlogs() {
    return http.get<Blog[]>(URL)
  },
  getBlogDetail(id: number) {
    return http.get<Blog>(`${URL}/${id}`)
  },
  createBlog(blog: Blog) {
    return http.post<Blog>(URL, blog)
  },
  updateBlog(id: number, blog: Blog) {
    return http.put<Blog>(`${URL}/${id}`, blog)
  },
  removeBlog(id: number) {
    return http.delete(`${URL}/${id}`)
  }
}

export default blogApi
