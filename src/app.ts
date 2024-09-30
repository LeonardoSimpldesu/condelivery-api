import fastify from 'fastify'
import { appRoutes } from './routes'
import cors from 'fastify-cors'

export const app = fastify()

app.register(cors, {origin: '*'})
app.register(appRoutes)
