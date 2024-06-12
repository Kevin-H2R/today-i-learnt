import prisma from "./prisma"

const getPosts = async () => {
  const posts = await prisma.post.findMany()
  return posts
}

export {getPosts}
