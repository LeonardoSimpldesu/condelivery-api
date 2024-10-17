import { prisma } from "@/lib/prisma";
import { FastifyReply, FastifyRequest } from "fastify";

type TOrderResource = {
    id: number;
    code: string;
    description: string;
    status: string;
    createdAt: Date;
    collaborator: {
      id: number;
      name: string;
    };
  };

export async function orderGetController(request: FastifyRequest, reply: FastifyReply) {
    try {
        const as = await prisma.order.findMany({})

        const orders = await prisma.order.findMany({
            where: {
                id: { gt: 0 }
            },
            select: {
                id: true,
                code: true,
                description: true,
                status: true,
                created_at: true,
                collaborator: {
                    select: {
                        id: true,
                        name: true
                    }
                }
            }
        })

        const ordersResource: TOrderResource[] = orders.map(order => ({
            ...order,
            createdAt: order.created_at,
        }))

        return reply.status(200).send(ordersResource);
    }

    catch (error) {

        console.log(error)
        return reply.status(409).send(error)
    }
}