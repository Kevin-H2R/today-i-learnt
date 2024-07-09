"use client"

import { usePostContext } from "@/context/post-context"
import Markdown from "react-markdown"
import ShareButton from "./share-button"

 const MainPost = () => {
  const {mainPost} = usePostContext()
  fetch('/api/view', { method: 'PUT', body: JSON.stringify({ postId: mainPost.id }) })

  return mainPost && <div className="p-6 border rounded-xl bg-white shadow">
    <div className="text-center text-4xl">
      {mainPost?.title}
    </div>
    <div>
      {/* <div dangerouslySetInnerHTML={{ __html: mainPost.content }} /> */}
      <Markdown className="markdown">{ mainPost.content }</Markdown>
    </div>
    <ShareButton post={mainPost} />
  </div>
}

 export default MainPost
