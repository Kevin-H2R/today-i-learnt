import PostDeleteButton from "@/components/post-delete-button"
import PostToggleButton from "@/components/post-toggle-button"
import { getPosts, getPostViewCount } from "@/lib/data"
import { formatDate } from "@/lib/dateFormat"

const ManagePage = async () => {
  const posts = await getPosts(true)

  return <main>
      <div className="flex flex-col min-h-screen p-6">
        <div className="flex justify-between">
          <div className="flex basis-6/12 gap-2">
            <div className="flex basis-5/12">Title</div>
            <div className="flex basis-5/12">Date</div>
            <div className="flex basis-2/12">Views</div>
          </div>
          <div className="flex basis-6/12 justify-end">
            Action
          </div>
        </div>
        {posts && posts.map(p => {
          return <div className="flex justify-between" key={'post_' + p.id}>
            <div className="flex basis-6/12 gap-2">
              <div className="flex basis-5/12">{p.title}</div>
              <div className="flex basis-5/12">{formatDate(p.date)}</div>
              <div className="flex basis-2/12">{ getPostViewCount(p.id) }</div>
            </div>
            <div className="flex basis-6/12 justify-end gap-3">
              <PostToggleButton id={p.id} isPublished={p.published} />
              <div className="flex"><div className="flex flex-col">Modify</div></div>
              <PostDeleteButton id={p.id} />
            </div>
          </div>
        })}
      </div>
  </main>
}

export default ManagePage
