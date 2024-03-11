import DemandModel from '../models/demandModel.js'
export const getDemands = async (req, resp) => {
  const demandModelObject = new DemandModel()
  const { page } = req.params
  const limit = Number(process.env.DOCUMENT_PER_PAGE)
  const demandData = await demandModelObject.findDemandWithFormat(page, limit)
  resp.status(200).send(demandData)
}

export const addDemand = (req, resp) => {
  // const {patients,doctor,}
  resp.send('ok')
}
export const updateDemand = (req, resp) => {
  resp.send('all demands')
}
export const deleteDemand = (req, resp) => {
  resp.send('all demands')
}
