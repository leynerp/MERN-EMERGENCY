import DemandModel from '../models/demandModel.js'
export const getDemands = async (req, resp) => {
  const demandModelObject = new DemandModel()
  const { page } = req.params
  const limit = Number(process.env.DOCUMENT_PER_PAGE)
  const demandData = await demandModelObject.findDemandWithFormat(page, limit)
  resp.status(200).send(demandData)
}

export const addDemand = (req, resp) => {
  const demandData = { ...req.body }
  const { bloodPressure, respiratoryRate, bodyTemperature, heartRate } = demandData
  delete demandData.bloodPressure
  delete demandData.respiratoryRate
  delete demandData.bodyTemperature
  delete demandData.heartRate
  const vitalSign = { bloodPressure, respiratoryRate: Number(respiratoryRate), bodyTemperature: Number(bodyTemperature), heartRate: Number(heartRate) }
  const demandObject = { ...demandData, vitalSign, registryDate: Date.parse(demandData.registryDate) }
  try {
    const demandModel = new DemandModel(demandObject)
    demandModel.save()
    resp.status(200).send('Demand save success')
  } catch (error) {
    console(error)
  }
}
export const updateDemand = (req, resp) => {
  resp.send('all demands')
}
export const deleteDemand = (req, resp) => {
  resp.send('all demands')
}
