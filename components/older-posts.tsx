"use client"

import { usePostContext } from "@/context/post-context"

const OlderPosts = () => {
  const {posts, setMainPost} = usePostContext()
  return <ul>
  {posts && posts.map(p => 
  <li className="text-gray-500 cursor-pointer" 
  onClick={() => {setMainPost(p)}}>{p.title}</li>
  )}
</ul>
}

export default OlderPosts