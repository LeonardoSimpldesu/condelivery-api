import { app } from "./app"
import { env } from "./env";

  // Handler específico para Vercel
export default async function handler(request: any, response: any) {
  try {
    await app.ready()
    app.server.emit('request', request, response)
  } catch (error) {
    response.status(500).send({ error: 'Internal Server Error' })
  }
}

// Para desenvolvimento local
if (process.env.NODE_ENV !== 'production') {
  const start = async () => {
    try {
      app
      .listen({
        host: "0.0.0.0",
        port: env.PORT,
      })
      .then(() => {
        console.log("✅ HTTP Server Running!");
      });
    } catch (err) {
      app.log.error(err)
      process.exit(1)
    }
  }
  start()
}