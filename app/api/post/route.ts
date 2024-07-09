import prisma from "@/lib/prisma"

const PUT = async (request: Request) => {
  const {title, content} = await request.json()
  const post = await prisma.post.create({ data: { title, content } })
  return Response.json(post)
}

const POST = async (request: Request) => {
  const {id, title, content} = await request.json()
  const post = await prisma.post.update({ where: {id: Number.parseInt(id)}, data: { title, content } })
  return Response.json(post)
}

const DELETE = async (request: Request) => {
  const { id } = await request.json()
  await prisma.postView.deleteMany({where: {postId: id}})
  await prisma.post.delete({ where: { id } })
  return Response.json({success: true})
}

export {PUT, POST, DELETE}
