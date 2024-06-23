"use client"

import { usePostContext } from "@/context/post-context"

 const MainPost = () => {
  const {mainPost} = usePostContext()
  return mainPost && <div className="p-6 border rounded-xl bg-white shadow">
    <div className="text-center text-4xl">
      {mainPost?.title}
    </div>
    <div>
      <div dangerouslySetInnerHTML={{ __html: mainPost.content }} />
    </div>
  </div>
}

 export default MainPost