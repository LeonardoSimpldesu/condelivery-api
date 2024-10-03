import { prisma } from "@/lib/prisma";
import { FastifyRequest, FastifyReply, FastifySchema } from "fastify";
import { z } from "zod";

export async function residentCreateController(request: FastifyRequest, reply: FastifyReply) {
  const userCreateBody = z.object({
    username: z.string().min(3, { message: 'O nome do usuario deve ter pelo menos 3 caracteres' }),
    email: z.string().email({ message: 'É preciso ser um email valido' }),
    password: z.string().min(3, { message: 'A senha precisa ter pelo menos 3 caracteres' }),
    photo_path: z.string(),
    last_name: z.string(),
    cpf: z.string(),
    cell: z.string(),

  }, { message: 'Os campos: username, email e password são obrigatórios' })

  try {
    const { username, email, password, photo_path, last_name, cpf, cell } = userCreateBody.parse(request.body);

    const emailAlreadyExists = await prisma.resident.findUnique({
      where: {
        email: email,
      }
    })

    if (emailAlreadyExists) {
      throw new Error('Este email está sendo utilizado por outro usuário, tente outro email')
    }

    const userData = await prisma.resident.create({
      data: {
        name: username,
        email: email,
        password: password,
        photo_path: photo_path,
        last_name: last_name,
        cpf: cpf,
        cell: cell, 
        apartment: {}
      }
    })

    return reply.status(201).send(userData);

  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error(error)
      return reply.status(409).send(error.issues);
    }
    console.error(error)
    return reply.status(409).send(error)
  }
}
