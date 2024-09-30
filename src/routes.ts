import { FastifyInstance } from "fastify";
import { userCreateController } from "./http/controllers/userCreateController";
import { orderGetController } from "./http/controllers/orderGetController";
import { ratingCreateController } from "./http/controllers/ratingCreateController";
import { policiesGetController } from "./http/controllers/policiesGetController";
import { policiesCreateController } from "./http/controllers/policiesCreateController";

interface IBody {
  username: string;
  password: string;
  gay: string;
}

export async function appRoutes(app: FastifyInstance) {
  app.get("/", ((request, reply) => {
    return reply.status(200).send("Server HTTP working!")
  }))

  app.post('/create-user', userCreateController)
  app.post('/create-rating', ratingCreateController)
  app.get('/get-order', orderGetController)
  app.get('/get-policies', policiesGetController)
  app.post('/create-policies', policiesCreateController)
}
