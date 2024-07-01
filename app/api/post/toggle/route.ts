import prisma from "@/lib/prisma"

const POST = async (request: Request) => {
  const {id, published} = await request.json()
  await prisma.post.update({where: {id}, data: {published}})
  return Response.json({})
}

export {POST}
