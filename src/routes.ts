import { FastifyInstance } from "fastify";
import { userCreateController } from "./http/controllers/userCreateController";

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
}
