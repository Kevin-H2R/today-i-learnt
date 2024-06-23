import prisma from "./prisma"

const getPosts = async () => {
  const posts = await prisma.post.findMany({orderBy: {date: "desc"}})
  return posts
}

export {getPosts}
