import { prisma } from "@/lib/prisma";
import { FastifyReply, FastifyRequest } from "fastify";

export async function collaboratorGetController(request: FastifyRequest, reply: FastifyReply) {
    try {

        let returnData;

        const data = await prisma.collaborator.findMany({
            where: {
                id: { gt: 0 }
            },
            include: {
                ratings: true,
                order: true
            }
        })

        data.forEach(item => {

            let sumRatings = 0;
            item?.ratings.forEach(item => {
                sumRatings += item.ratingNote
            })

            item && (item.countDeliveries = item?.order.length);
            item && (item.mediaRating = sumRatings > 0 ?
                sumRatings / item?.ratings.length : 0)
            item && (item.countRating = item?.ratings.length)

            // x.data.push({...item})

        })

        // returnData = data.map((collaborator) => {
        //     const servicesProvidedArray = collaborator.servicesProvided.split(";")
        //     .map(services => services.trim())
            
        //     return {
        //         ...collaborator,
        //         servicesProvided: servicesProvidedArray.slice(0, servicesProvidedArray.length - 1)
        //     }
        // })

        // () parametros ou oubrigatariamente retornar
        // {} executar
        // x.data = [{...data}]


        return reply.status(200).send(data);
        // return reply.status(200).send(returnData);
    }

    catch (error) {

        console.log(error)
        return reply.status(409).send(error)
    }
}