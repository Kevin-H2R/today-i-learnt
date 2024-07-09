"use client"
import { slugify } from "@/lib/utils";
import { Post } from "@prisma/client";

const ShareButton = ({post}: {post: Post}) => {
  const share = () => {
    const url = window.location.href + slugify(post.title)
    navigator.clipboard.writeText(url);
 }
  return <button onClick={share}>Share</button>
}

export default ShareButton
