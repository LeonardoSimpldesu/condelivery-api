import { prisma } from "@/lib/prisma";
import { FastifyReply, FastifyRequest } from "fastify";

export async function collaboratorGetController(request: FastifyRequest, reply: FastifyReply) {
    try {


        const data = await prisma.collaborator.findMany({
            where: {
                id: { gt: 0 }
            },
            select: { 
                id: true, 
                ratings: true, 
                order: true
            }
        })
        
        // data.forEach(item => {
        //     item.order.
        // })

        return reply.status(200).send(data);
    }

    catch (error) {

        console.log(error)
        return reply.status(409).send(error)
    }
}