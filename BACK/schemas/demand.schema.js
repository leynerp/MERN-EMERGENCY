import mongoose from 'mongoose'
const { Schema } = mongoose
const vitalSignalSchema = new Schema({
  respiratoryRate: {
    type: Number,
    require: true
  },
  bloodPressure: {
    type: String,
    require: true
  },
  bodyTemperature: {
    type: Number,
    require: true
  },
  heartRate: {
    type: Number,
    require: true
  }
})

export const demandSchema = new Schema({
  registryDate: {
    type: Date,
    require: true
  },
  vitalSign: vitalSignalSchema,
  patients: {
    type: String,
    require: true
  },
  emergencyCode: {
    type: String,
    require: true
  },
  doctor: {
    type: String,
    require: true
  },
  agent: {
    type: String,
    require: true
  },
  healthUnitDestin: {
    type: String,
    require: true
  },
  priority: {
    type: String,
    require: true
  },
  state: {
    type: String,
    require: true
  }

}, {
  methods: {
    findDemandWithFormat (page = 1, limit = 10) {
      const registryDate = { $dateToString: { format: '%d-%m-%Y %HH:%mm', date: '$registryDate' } }
      const bloodPressure = '$vitalSign.bloodPressure'
      const respiratoryRate = '$vitalSign.bloodPressure'
      const bodyTemperature = '$vitalSign.bloodPressure'
      const heartRate = '$vitalSign.bloodPressure'
      return mongoose.model('Demand').aggregate([
        {
          $project: {
            registryDate,
            bloodPressure,
            respiratoryRate,
            bodyTemperature,
            heartRate,
            patients: 1,
            emergencyCode: 1,
            doctor: 1,
            agent: 1,
            healthUnitDestin: 1,
            priority: 1,
            state: 1

          }
        },
        {
          $facet: {
            data: [
              { $skip: (page - 1) * limit },
              { $limit: limit }
            ],
            totalCount: [
              { $count: 'total' }
            ]
          }
        }
      ]).exec()
    }
  }
})
