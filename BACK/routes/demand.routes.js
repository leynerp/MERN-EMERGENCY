import { Router } from 'express'
import { getDemands, addDemand, updateDemand, deleteDemand } from '../controllers/demand.controller.js'
import { demandSchema } from '../schemas/demand.validation.js'
import { validateDemandData } from '../middlewares/validator-demand.js'
const demandRoutes = Router()
demandRoutes.get('/demand/:page', getDemands)
demandRoutes.post('/demand', validateDemandData(demandSchema), addDemand)
demandRoutes.put('/demand', updateDemand)
demandRoutes.delete('/demand', deleteDemand)
export default demandRoutes
