import { FastifyInstance } from "fastify";
import { collaboratorGetDetailController } from "./http/controllers/collaboratorGetDetailContoller";
import { collaboratorGetController } from "./http/controllers/collaboratorGetController";
import { condominiumGetController } from "./http/controllers/condominiumGetController";
import { orderGetController } from "./http/controllers/orderGetController";
import { policyCreateController } from "./http/controllers/policyCreateController";
import { policyGetController } from "./http/controllers/policyGetController";
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

  app.get('/get-collaborators', collaboratorGetController)
  app.get('/get-collaborator-detail/:id', collaboratorGetDetailController)

  app.get('/get-condominiums', condominiumGetController)

  app.get('/get-orders', orderGetController)

  app.get('/get-policies', policyGetController)
  app.post('/create-policy', policyCreateController)

  app.post('/create-rate', ratingCreateController)

  app.post('/create-resident', residentCreateController)
}
