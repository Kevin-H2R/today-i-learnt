import prisma from "./prisma"

const getPosts = async () => {
  const posts = await prisma.post.findMany({orderBy: {date: "desc"}})
  return posts
}

const getPost = async (id: number) => {
  const post = await prisma.post.findFirst({ where: { id } })
  if (!post) throw new Error("No Post");
  return post
}

export {getPosts, getPost}
