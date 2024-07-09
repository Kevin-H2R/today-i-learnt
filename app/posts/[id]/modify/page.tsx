import ModifyPostForm from "@/components/forms/modify-post-form"
import { getPost } from "@/lib/data"

const ModifyPost = async ({ params }: { params: { id: string } }) => {
  const post = await getPost(Number.parseInt(params.id))
  return <ModifyPostForm post={post} />
}

export default ModifyPost
