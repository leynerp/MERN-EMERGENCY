import express from 'express'
import morgan from 'morgan'
import demandRoutes from './routes/demand.routes.js'
export default function initApp () {
  const app = express()
  app.use(morgan('dev'))
  app.use(express.json())

  // Routes
  app.use('/api', demandRoutes)

  app.listen(process.env.PORT)
  console.log('listen on', process.env.PORT)
}
