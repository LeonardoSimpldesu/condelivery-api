import { prisma } from "@/lib/prisma";
import { TOrderDetails } from "@/Dtos/orderDetailDto";
import { FastifyReply, FastifyRequest } from "fastify";

export async function orderGetDetailController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const { id }: any = request.params;

    const pedidoData = await prisma.order.findFirst({
      where: {
        id: parseInt(id),
      },
      include: {
        collaborator: true,
        rating: true,
        resident: true,
      },
    });

    const addressData = await prisma.address.findFirst();

    if (pedidoData && addressData) {
      // Como refator isso ?
      const data: TOrderDetails = {
        id: pedidoData.id,
        code: pedidoData.code,
        collaboratorId: pedidoData.collaborator.id ?? 0,
        createdAt: pedidoData.createdAt,
        updatedAt: pedidoData.updatedAt,
        description: pedidoData.description,
        status: pedidoData.status,
        rating: pedidoData.rating?.ratingNote ?? 0,
        isEvaluated: pedidoData.isEvaluated,
        tax: 10,
        freight: Math.floor(Math.random() * 50),
        resident: {
          name: pedidoData.resident.name ?? "",
          adress: {
            ...addressData
          },
        },
        collaborator: {
          name: pedidoData.collaborator.name ?? "",
          email: "", // tenho que criar isso
          phone: "", // tenho que criar isso
        },
      };
      return reply.status(200).send(data);
    }
  } catch (error) {
    console.log(error);
    return reply.status(409).send(error);
  }
}
