"use client"
import { Post } from "@prisma/client"
import Markdown from "react-markdown"

const SinglePost = ({post}: {post: Post}) => {

  return <div className="flex flex-col">
   <div className="flex flex-col">
      <div className="flex text-4xl">{ post.title }</div>
      <Markdown className="markdown">{ post.content }</Markdown>
    </div>

  </div>
}

export default SinglePost
