"use client"
import { Post } from "@prisma/client"
import { ReactNode, createContext, useContext, useState } from "react"

interface PostContextValue {
  mainPost: Post;
  setMainPost: React.Dispatch<React.SetStateAction<Post>>;
  posts: Post[];
}

export const PostContext = createContext<PostContextValue | undefined>(undefined)

export const PostProvider = ({children, initialPosts}: {children: ReactNode, initialPosts: Post[]}) => {
  const [mainPost, setMainPost] = useState(initialPosts[0])
  const [posts, setPosts] = useState(initialPosts)
  return <PostContext.Provider value={{mainPost, setMainPost, posts}}>
    {children}
  </PostContext.Provider>
}

export const usePostContext = () => {
  const context = useContext(PostContext)
  if (!context) {
    throw new Error()
  }
  return context
}
