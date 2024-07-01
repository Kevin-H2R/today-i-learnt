"use client"

import { usePostContext } from "@/context/post-context"
import Markdown from "react-markdown"

 const MainPost = () => {
  const {mainPost} = usePostContext()
  return mainPost && <div className="p-6 border rounded-xl bg-white shadow">
    <div className="text-center text-4xl">
      {mainPost?.title}
    </div>
    <div>
      {/* <div dangerouslySetInnerHTML={{ __html: mainPost.content }} /> */}
      <Markdown className="markdown">{ mainPost.content }</Markdown>
    </div>
  </div>
}

 export default MainPost
