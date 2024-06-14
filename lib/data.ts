import prisma from "./prisma"

const getPosts = async () => {
  const posts = await prisma.post.findMany()
  return posts
}

const getLastPost = async () => {
  const recentPost = await prisma.post.findFirst({
    orderBy: {
      date: 'desc'
    }
  });
  return recentPost
}

export {getPosts, getLastPost}
