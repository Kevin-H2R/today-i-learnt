import prisma from "@/lib/prisma"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { cookies } from "next/headers";

const POST = async (request: Request) => {
  const { username, password } = await request.json()

  if (!process.env.SECRET_KEY) {
    return Response.json({ message: "Could not find the secret key" }, { status: 401 })
  }
  const user = await prisma.user.findFirst({ where: { username } })
  if (!user){
    return Response.json({message: "Could not find the user"}, {status: 401})
  }
  if (await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY)
    cookies().set("token", token)
    return Response.json({})
  }
  return Response.json({message: "Incorrect password"}, {status: 401})
}

export {POST}
