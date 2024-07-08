"use client"

import { usePostContext } from "@/context/post-context"
import { Post } from "@prisma/client"

const OlderPosts = () => {
  const { posts, setMainPost } = usePostContext()

  const changePost = async (post: Post) => {
    const response = await fetch('/api/view', { method: 'PUT', body: JSON.stringify({ postId: post.id }) })
    console.log(response)
    setMainPost(post)
  }
  return <ul>
  {posts && posts.map(p =>
  <li className="text-gray-500 cursor-pointer" key={'post_' + p.id}
  onClick={() => {changePost(p)}}>{p.title}</li>
  )}
</ul>
}

export default OlderPosts
