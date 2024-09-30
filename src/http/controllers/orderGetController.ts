import { prisma } from "@/lib/prisma";
import { FastifyReply, FastifyRequest } from "fastify";

export async function orderGetController(request: FastifyRequest, reply: FastifyReply) {
    try {


        const x = await prisma.order.findMany({
            where: {
                id: { gt: 0 }
            },
            select: {
                id: true,
                code: true,
                collaboratorId: true,
                created_at: true,
                description: true,
                status: true,
                collaborator: {
                    select: {
                        id: true,
                        name: true,
                        countDeliveries: true,
                        mediaRating: true,
                        countRating: true,
                        operatingTimeInMonths: true,
                        tags: true,
                        languages: true,
                        local: true,
                        servicesProvided: true,
                        ratings: true
                    }
                },
                resident: true
            }
        })

        for (const item of x) {
            const y = await prisma.rating.count({
                where: {
                    collaboratorId: item.collaborator.id
                }
            });

            const z = await prisma.rating.aggregate({
                _avg: {
                    ratingNote: true
                },
                where: {
                    collaboratorId: item.collaborator.id
                }, 
            });

            console.log("count", y, " e media", z._avg);
            

            item.collaborator.countRating = y
            item.collaborator.mediaRating =  z._avg?.ratingNote == null ? 0 : z._avg?.ratingNote;

        }

        // returning polices


        return reply.status(200).send(x);
    }

    catch (error) {

        console.log(error)
        return reply.status(409).send(error)
    }
}