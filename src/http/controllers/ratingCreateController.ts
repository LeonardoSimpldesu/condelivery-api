import { prisma } from "@/lib/prisma";
import { FastifyRequest, FastifyReply, FastifySchema } from "fastify";
import { z } from "zod";

export async function ratingCreateController(request: FastifyRequest, reply: FastifyReply) {
    const userCreateBody = z.object({
        order_code: z.string().min(1, { message: "O código do pedido não pode ser vazio" }),
        rating: z.number().max(5),
        recommendations: z.string().optional()
    }, { message: 'Os campos: codigo do pedido e nota da avaliação são obrigatórios' })

    try {
        const { order_code, rating, recommendations } = userCreateBody.parse(request.body);

        // Porque findUnique tá dando ruim
        const orderAlreadyExists = await prisma.order.findFirst({
            where: { 
                code: order_code
            }

        })

        if (!orderAlreadyExists) {
            throw new Error('Este pedido não existe!')
        }

        const ratingData = await prisma.rating.create({
            data: {
                ratingNote: rating, 
                recommendations: recommendations, 
                orderId: orderAlreadyExists.id, 
                collaboratorId: orderAlreadyExists.collaboratorId
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
