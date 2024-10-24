import { prisma } from "@/lib/prisma";
import { FastifyReply, FastifyRequest } from "fastify";

export async function collaboratorGetDetailController(request: FastifyRequest, reply: FastifyReply) {
    try {

        let returnData;
        const { id }: any = request.params

        const data = await prisma.collaborator.findFirst({
            where: {
                id: parseInt(id)
            },
            include: {
                ratings: true,
                order: true
            }
        })

        let sumRatings = 0;
        data?.ratings.forEach(item => {
            sumRatings += item.ratingNote
        })

        data && (data.countDeliveries = data?.order.length);
        data && (data.mediaRating = sumRatings > 0 ?
            sumRatings / data?.ratings.length : 0)
        data && (data.countRating = data?.ratings.length)

        const servicesProvidedArray = data?.servicesProvided.split(";")
            .map(services => services.trim()
            )
        
        const tagsArray = data?.tags.split(";")
        .map(tag => tag.trim()
        )
        
        returnData = {
            ...data,
            servicesProvided: servicesProvidedArray?.slice(0, servicesProvidedArray?.length - 1),
            tags: tagsArray?.slice(0, tagsArray?.length - 1),
        }


        return reply.status(200).send(returnData);
    }

    catch (error) {

        console.log(error)
        return reply.status(409).send(error)
    }
}