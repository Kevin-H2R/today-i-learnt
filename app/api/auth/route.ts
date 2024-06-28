import prisma from "@/lib/prisma"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { cookies } from "next/headers";

const POST = async (request: Request) => {
  const {username, password} = await request.json()
  const user = await prisma.user.findFirst({ where: { username } })
  if (!process.env.SECRET_KEY) {
    return Response.json({message: "error"}, {status: 401})
  }
  if (user && await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY)
    cookies().set("token", token)
    return Response.json({})
  }
  return Response.json({message: "error"}, {status: 401})
}

export {POST}
