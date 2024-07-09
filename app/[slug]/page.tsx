import ShareButton from "@/components/share-button"
import { getPostBySlug } from "@/lib/data"
import { notFound } from "next/navigation"
import Markdown from "react-markdown"

const PostPage = async ({ params }: { params: { slug: string } }) => {
  try {
    const post = await getPostBySlug(params.slug)
    return <main>
      <div className="flex flex-col min-h-screen p-6 items-center">
        <div className="flex flex-col w-full md:w-2/3">
          <div className="flex flex-col items-center">
            <div className="flex text-4xl mb-10 text-center">{ post.title }</div>
            <Markdown className="markdown">{post.content}</Markdown>
            <ShareButton post={post} />
          </div>
        </div>
      </div>
    </main>
  } catch (error) {
    notFound()
  }
}

export default PostPage
