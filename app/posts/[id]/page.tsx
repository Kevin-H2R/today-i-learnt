import SinglePost from "@/components/single-post"
import { getPost } from "@/lib/data"
import { notFound } from "next/navigation"

const PostPage = async ({ params }: { params: { id: string } }) => {
  try {
    const post = await getPost(Number.parseInt(params.id))
    return <main>
      <div className="flex flex-col min-h-screen p-6 items-center">
        <div className="flex flex-col w-full md:w-2/3">
          <SinglePost post={post}/>
        </div>
      </div>
    </main>
  } catch (error) {
    notFound()
  }
}

export default PostPage
