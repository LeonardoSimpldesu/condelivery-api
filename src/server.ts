import { app } from "./app"
import { env } from "./env";


if (process.env.NODE_ENV !== 'production') {
  app
  .listen({
    host: "0.0.0.0",
    port: env.PORT,
  })
  .then(() => {
    console.log("✅ HTTP Server Running!");
  });
}

  export default async function handler(req: any, res: any) {
    await app.ready()
    app.server.emit('request', req, res)
  }