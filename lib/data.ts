import prisma from "./prisma"

const getPosts = async (all: boolean) => {
  return all ? await prisma.post.findMany({ orderBy: { date: "desc" } }) :
    await prisma.post.findMany({ orderBy: { date: "desc" }, where: {published: true}})
}

const getPost = async (id: number) => {
  const post = await prisma.post.findFirst({ where: { id } })
  if (!post) throw new Error("No Post");
  return post
}

const getPostViewCount = async (postId: number) => {
  const count = await prisma.postView.count({ where: { postId } })
  return count
}

export {getPosts, getPost, getPostViewCount}
