"use client"
import { Post } from "@prisma/client"
import { useState } from "react"
import Markdown from "react-markdown"

const SinglePost = ({post}: {post: Post}) => {
  const [isModifying, setIsModifying] = useState(false)
  const [title, setTitle] = useState(post.title)
  const [content, setContent] = useState(post.content)
  const update = async () => {
    setIsModifying(false)
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: post.id, title, content})
    };
    await fetch('http://localhost:3000/api/post', requestOptions)
  }

  return <div className="flex flex-col">
    <div className="flex">
      {isModifying ? <button onClick={update}>Update</button> :
        <button onClick={() => setIsModifying(true)}>Modify</button>}
    </div>
    {isModifying && <div className="flex flex-col">
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea value={content} onChange={(e) => setContent(e.target.value)} />
    </div>}
    {!isModifying && <div className="flex flex-col">
      <div className="flex text-4xl">{title}</div>
      <Markdown className="markdown">{ content }</Markdown>
    </div>}

  </div>
}

export default SinglePost
