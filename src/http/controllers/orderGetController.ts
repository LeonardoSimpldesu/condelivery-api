import { prisma } from "@/lib/prisma";
import { FastifyReply, FastifyRequest } from "fastify";

export async function orderGetController(request: FastifyRequest, reply: FastifyReply) {
    try {
        let returnData; 

        const x = await prisma.order.findMany({
            where: {
                id: { gt: 0 }
            },
            
            include: { 
                collaborator: true
            }
        })

        returnData = x.map((order) => {
            const servicesProvidedArray = order.collaborator.servicesProvided.split(";")
            .map(services => services.trim())
            
            order.collaborator.serviceProvidedArray = servicesProvidedArray.slice(0, servicesProvidedArray.length - 1)
            return {
                ...order,
                // criar um objeto colaborator aqui e ir preenchendo propriedade por propriedade. 
            }
        })

        // return reply.status(200).send(x);
        return reply.status(200).send(returnData);
    }

    catch (error) {

        console.log(error)
        return reply.status(409).send(error)
    }
}