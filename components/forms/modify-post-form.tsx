"use client"
import { Post } from "@prisma/client";
import { useState } from "react";

const ModifyPostForm = ({ post }: { post: Post }) => {

  const [title, setTitle] = useState(post.title)
  const [content, setContent] = useState(post.content)

  const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    data['id'] = post.id.toString()
    await fetch('/api/post', { method: 'POST', body: JSON.stringify(data) })
  }

  return <main>
    <div className="flex flex-col min-h-screen p-6">
    <form onSubmit={submitForm} className="flex flex-col w-full md:w-1/2 sm:w-3/4 gap-2">
        <input placeholder="Title" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
        <textarea placeholder="Content" id="content" name="content" value={content} onChange={(e) => setContent(e.target.value)}/>
        <button type="submit">Modify</button>
      </form>
    </div>
  </main>
}

export default ModifyPostForm
