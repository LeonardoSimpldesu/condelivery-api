import { prisma } from "@/lib/prisma";
import { TOrderDetails } from "@/Dtos/orderDetailDto";
import { FastifyReply, FastifyRequest } from "fastify";

export async function orderGetDetailController(request: FastifyRequest, reply: FastifyReply) {
    try {
        const { id }: any = request.params;

        const x = await prisma.order.findFirst({
            where: {
                id: parseInt(id)
            },
            include: { 
                collaborator: true, 
                rating: true,
                resident: true, 
            }
        })

        // Como refator isso ? 
        const data: TOrderDetails = {
            id: x?.id ?? 0,
            code: x?.code ?? '',
            collaboratorId: x?.collaborator.id ?? 0,
            createdAt: x?.created_at ?? new Date(),
            updatedAt: x?.updated_at ?? new Date(),
            description: x?.description ?? '',
            status: x?.status ?? "EmRota",
            rating: x?.rating?.ratingNote ?? 0,
            isEvaluated: x?.isEvaluated ?? false,
            tax: 0, // Não criei isso na model 
            freight: 0, // Não criei isso na model 
            resident: {
                name: x?.resident.name ?? '',
                adress: { // tenho que pensar em como obter essas informações
                    street: '',
                    country: '',
                    neighborhood: '',
                    state: '',
                    cep: '',
                    number: 0,
                }
            },
            collaborator: {
                name: x?.collaborator.name ?? '',
                email: '', // tenho que criar isso
                phone: '' // tenho que criar isso 
            }
        }

        return reply.status(200).send(x);
    }

    catch (error) {

        console.log(error)
        return reply.status(409).send(error)
    }
}