import DemandModel from '../models/demandModel.js'
export const getDemands = async (req, resp) => {
  const demandModelObject = new DemandModel()
  const demandData = await demandModelObject.findDemandWithFormat()
  resp.status(200).send(demandData)
}

export const addDemand = (req, resp) => {
  console.log(req.body)
  resp.send('ok')
}
export const updateDemand = (req, resp) => {
  resp.send('all demands')
}
export const deleteDemand = (req, resp) => {
  resp.send('all demands')
}
