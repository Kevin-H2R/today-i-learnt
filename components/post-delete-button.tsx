"use client"

import { useState } from "react";

const PostDeleteButton = ({ id }: { id: number }) => {
  const deletePost = async () => {
    const requestOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id })
    };
    await fetch('/api/post', requestOptions)
  }
  return <button onClick={deletePost}>Delete</button>
}

export default PostDeleteButton
