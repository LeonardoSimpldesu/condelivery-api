import { prisma } from "@/lib/prisma";
import { FastifyReply, FastifyRequest } from "fastify";

export async function condominiumGetController(request: FastifyRequest, reply: FastifyReply) {
    try {

        const data = await prisma.condominium.findFirst({
            where: {
                id: { gt: 0 }
            },
            include: {
                address: true,
                policies: true,
                blocks: true
            }
        })

        return reply.status(200).send(data);
    }

    catch (error) {

        console.log(error)
        return reply.status(409).send(error)
    }
}