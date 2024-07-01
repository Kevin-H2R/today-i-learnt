"use client"

import { useState } from "react";

const PostToggleButton = ({ id, isPublished }: { id: number, isPublished: boolean }) => {
  const [published, setPublished] = useState(isPublished)
  const togglePost = async () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, published: !published})
    };
    await fetch('http://localhost:3000/api/post/toggle', requestOptions)
    setPublished(!published)
  }
  return <button onClick={togglePost}>{ published ? 'un-publish' : 'publish'}</button>
}

export default PostToggleButton
