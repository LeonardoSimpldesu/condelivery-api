import { prisma } from "@/lib/prisma";
import { FastifyReply, FastifyRequest } from "fastify";

export async function collaboratorGetDetailController(request: FastifyRequest, reply: FastifyReply) {
    try {

        let returnData;
        const { id }: any = request.params

        const x = await prisma.collaborator.findFirst({
            where: {
                id: parseInt(id)
            },
            include: {
                ratings: true,
                order: true
            }
        })

        let sumRatings = 0;
        x?.ratings.forEach(item => {
            sumRatings += item.ratingNote
        })

        x && (x.countDeliveries = x?.order.length);
        x && (x.mediaRating = sumRatings > 0 ?
            sumRatings / x?.ratings.length : 0)
        x && (x.countRating = x?.ratings.length)

        const servicesProvidedArray = x?.servicesProvided.split(";")
            .map(services => services.trim()
            )
        returnData = {
            ...x,
            servicesProvided: servicesProvidedArray?.slice(0, servicesProvidedArray?.length - 1)
        }


        return reply.status(200).send(returnData);
    }

    catch (error) {

        console.log(error)
        return reply.status(409).send(error)
    }
}