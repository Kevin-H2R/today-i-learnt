import prisma from "@/lib/prisma"

const PUT = async (request: Request) => {
  const {title, content} = await request.json()
  const post = await prisma.post.create({ data: { title, content } })
  return Response.json(post)
}

const POST = async (request: Request) => {
  const {id, title, content} = await request.json()
  const post = await prisma.post.update({ where: {id}, data: { title, content } })
  return Response.json(post)
}

export {PUT, POST}
