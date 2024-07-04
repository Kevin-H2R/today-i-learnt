"use client"

const PostsCreatePage = () => {
  const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const response = await fetch('/api/post', {method: 'PUT', body: JSON.stringify(data)})
    console.log(response)
  }
  return <main>
    <div className="flex flex-col min-h-screen p-6 items-center">
      <form onSubmit={submitForm} className="flex flex-col w-full md:w-1/2 sm:w-3/4 gap-2">
        <input placeholder="Title" id="title" name="title"/>
        <textarea placeholder="Content" id="content" name="content"/>
        <button type="submit">Create</button>
      </form>
    </div>
  </main>
}

export default PostsCreatePage
