import DemandModel from '../models/demandModel.js'
export const getDemands = async (req, resp) => {
  const demandModelObject = new DemandModel()
  const { page } = req.params
  const limit = Number(process.env.DOCUMENT_PER_PAGE)
  const demandData = await demandModelObject.findDemandWithFormat(page, limit)
  resp.status(200).send(demandData)
}

export const addDemand = async (req, resp) => {
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
    await demandModel.save()
    resp.status(200).json('Demand save success')
  } catch (error) {
    console(error)
  }
}
export const updateDemand = async (req, resp) => {
  const { id, state, priority } = req.body
  try {
    await DemandModel.findOneAndUpdate({ _id: id }, { state, priority }, { new: true })
    resp.status(200).json('Demand update success')
  } catch (error) {
    resp.status(404).json('Demand not found')
  }
}
export const deleteDemand = async (req, resp) => {
  const { id } = req.body
  try {
    await DemandModel.findOneAndDelete({ _id: id })
    resp.status(200).json('Demand delete success')
  } catch (error) {
    resp.status(404).json('Demand not found')
  }
}
