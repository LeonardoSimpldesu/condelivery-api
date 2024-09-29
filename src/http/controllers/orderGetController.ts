import { prisma } from "@/lib/prisma";
import { FastifyRequest, FastifyReply, FastifySchema } from "fastify";
import { z } from "zod";

export async function orderGetController(request: FastifyRequest, reply: FastifyReply) {
    try {
        const x = await prisma.order.findMany({
            where: {
                id: { gt: 0 }
            }
        })

        console.log(x);
        return reply.status(200).send(x);
    }

    catch (error) {

        console.log(error)
        return reply.status(409).send(error)
    }
}