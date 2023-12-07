import type { Comment } from './Comment'

export type Blog = {
  id?: number
  title: string
  content: string
  mainContent: string
  comments: Comment[]
  img: string
}
