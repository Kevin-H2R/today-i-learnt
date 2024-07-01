import PostToggleButton from "@/components/post-toggle-button"
import { getPosts } from "@/lib/data"
import { formatDate } from "@/lib/dateFormat"

const ManagePage = async () => {
  const posts = await getPosts()

  return <main>
    <div className="flex flex-col min-h-screen p-6">
      {posts && posts.map(p => {
        return <div className="flex justify-between" key={'post_' + p.id}>
          <div className="flex basis-6/12">
            <div className="flex basis-6/12">{p.title}</div>
            <div className="flex basis-6/12">{formatDate(p.date)}</div>
          </div>
          <div className="flex basis-6/12 justify-end gap-3">
            <PostToggleButton id={p.id} isPublished={p.published} />
            <div className="flex"><div className="flex flex-col">Modify</div></div>
          </div>
        </div>
      })}
    </div>
  </main>
}

export default ManagePage
