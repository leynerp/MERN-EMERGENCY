import mongoose from 'mongoose'
import { demandSchema } from '../schemas/demand.schema.js'
const DemandModel = mongoose.model('Demand', demandSchema, 'demand')
export default DemandModel
