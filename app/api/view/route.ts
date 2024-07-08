import prisma from "@/lib/prisma"

const PUT = async (request: Request) => {
  const { postId } = await request.json()
  const ipAddress = request.headers.get('x-forwarded-for') || ''
  const view = await prisma.postView.create({ data: { postId, ipAddress } })
  return Response.json(view)
}

export {PUT }
