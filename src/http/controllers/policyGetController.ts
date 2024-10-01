import { prisma } from "@/lib/prisma";
import { FastifyReply, FastifyRequest } from "fastify";

export async function policiesGetController(request: FastifyRequest, reply: FastifyReply) {
    try {


        const x = await prisma.condominium.findFirst({
            where: {
                id: { gt: 0 }
            },
            select: {
                id: true,
                name: true,
                policies: true
            }
        })

        return reply.status(200).send(x);
    }

    catch (error) {

        console.log(error)
        return reply.status(409).send(error)
    }
}