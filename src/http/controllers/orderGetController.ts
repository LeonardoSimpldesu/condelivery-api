import { prisma } from "@/lib/prisma";
import { FastifyReply, FastifyRequest } from "fastify";

export async function orderGetController(request: FastifyRequest, reply: FastifyReply) {
    try {


        const x = await prisma.order.findMany({
            where: {
                id: { gt: 0 }
            },
            include: { 
                collaborator: true
            }
        })

        return reply.status(200).send(x);
    }

    catch (error) {

        console.log(error)
        return reply.status(409).send(error)
    }
}