import { prisma } from "@/lib/prisma";
import { FastifyRequest, FastifyReply, FastifySchema } from "fastify";
import { z } from "zod";

export async function policiesCreateController(request: FastifyRequest, reply: FastifyReply) {
    const userCreateBody = z.object({
        title: z.string().min(1, { message: "O título não pode ser vazio!" }),
        description: z.string().min(1, { message: "A descrição não pode ser vazia!" }),
    }, { message: 'Os campos: título e descrição das políticas do condomínio são obrigatórios' })

    try {
        const { title, description } = userCreateBody.parse(request.body);

        // Porque findUnique tá dando ruim
        const orderAlreadyExists = await prisma.policies.findFirst({
            where: { 
                title: title
            }

        })

        if (orderAlreadyExists) {
            throw new Error('Essa política de condomínio já existe!')
        }

        const ratingData = await prisma.policies.create({
            data: {
                title: title, 
                description: description,
                condominiumId: 1
                
            }
        })

        return reply.status(201).send(ratingData);

    } catch (error) {
        if (error instanceof z.ZodError) {
            console.error(error)
            return reply.status(409).send(error.issues);
        }
        console.error(error)
        return reply.status(409).send(error)
    }
}
