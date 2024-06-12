import prisma from "@/lib/prisma"

const PUT = async (request: Request) => {
  const {title, content} = await request.json()
  const post = await prisma.post.create({ data: { title, content } })
  return Response.json(post)
}

export {PUT}
