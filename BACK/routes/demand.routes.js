import { Router } from 'express'
import { getDemands, addDemand, updateDemand, deleteDemand } from '../controllers/demand.controller.js'
const demandRoutes = Router()

demandRoutes.get('/demand/:page', getDemands)
demandRoutes.post('/demand', addDemand)
demandRoutes.put('/demand', updateDemand)
demandRoutes.delete('/demand', deleteDemand)
export default demandRoutes
