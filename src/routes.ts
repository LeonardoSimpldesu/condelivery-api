import { FastifyInstance } from "fastify";
import { getCollaboratorDetail } from "./http/controllers/collaborarGetDetailContoller";
import { orderGetController } from "./http/controllers/orderGetController";
import { policiesCreateController } from "./http/controllers/policyCreateController";
import { policiesGetController } from "./http/controllers/policyGetController";
import { ratingCreateController } from "./http/controllers/rateCreateController";
import { residentCreateController } from "./http/controllers/residentCreateController";

interface IBody {
  username: string;
  password: string;
  gay: string;
}

export async function appRoutes(app: FastifyInstance) {
  app.get("/", ((request, reply) => {
    return reply.status(200).send("Server HTTP working!")
  }))

  app.get('/get-collaborator-detail/:id', getCollaboratorDetail)

  app.get('/get-orderS', orderGetController)

  app.get('/get-policies', policiesGetController)
  app.post('/create-policy', policiesCreateController)

  app.post('/create-rate', ratingCreateController)

  app.post('/create-resident', residentCreateController)
}
