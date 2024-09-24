import { prisma } from "@/lib/prisma";
import { FastifyRequest, FastifyReply, FastifySchema } from "fastify";
import { z } from "zod";

export async function userCreateController(request: FastifyRequest, reply: FastifyReply) {
  const userCreateBody = z.object({
    username: z.string().min(3, {message: 'O nome do usuario deve ter pelo menos 3 caracteres'}),
    email: z.string().email({message: 'É preciso ser um email valido'}),
    password: z.string().min(3, {message: 'A senha precisa ter pelo menos 3 caracteres'})
  }, {message: 'Os campos: username, email e password são obrigatórios'})

  try {
    const { username, email, password } = userCreateBody.parse(request.body);

    const emailAlreadyExists = await prisma.user.findUnique({
      where:{
        email: email,
      }
    })

    if(emailAlreadyExists){
      throw new Error('Este email está sendo utilizado por outro usuário, tente outro email')
    }

    const userData = await prisma.user.create({
      data: {
        name: username,
        email: email,
        password: password
      }
    })

    return reply.status(201).send(userData);

  } catch (error) {
    if (error instanceof z.ZodError){
      console.error(error)
      return reply.status(409).send(error.issues);
    }
    console.error(error)
    return reply.status(409).send(error)
  }
}
