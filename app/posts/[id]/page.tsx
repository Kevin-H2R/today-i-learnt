import SinglePost from "@/components/single-post"
import { getPost } from "@/lib/data"
import { notFound } from "next/navigation"

const PostPage = async ({ params }: { params: { id: string } }) => {
  try {
    const post = await getPost(Number.parseInt(params.id))
    return <main>
      <div className="flex flex-col min-h-screen p-6">
        <SinglePost post={post}/>
      </div>
    </main>
  } catch (error) {
    notFound()
  }
}

export default PostPage
