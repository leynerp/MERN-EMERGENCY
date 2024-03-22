export interface Demand {
  id: string
  emergency: string
  address: string
  patients: string
  doctor: string
  agent: string
  healthUnitDestin: string
  priority: string
  state: string
  emergencyCode: string
  registryDate: string
  bloodPressure: string
  respiratoryRate: string
  bodyTemperature: string
  heartRate: string
}
// TODO put in other files
export const EmergencyCode = [
  {
    code: 454545,
    name: 'Cardiac Arrest'
  },
  {
    code: 505050,
    name: 'Fire'
  },
  {
    code: 606060,
    name: 'Fire'
  }
] as const

export const HealthUnitDestiny = [
  {
    code: 12,
    name: 'Principal Hospital'
  },
  {
    code: 34,
    name: 'Center Hospital'
  },
  {
    code: 34,
    name: 'Old Hospital'
  }
] as const

export const demandSeed: Demand[] = [
  {
    id: '6508c67b6b80443b91a2ec7f',
    emergency: 'Emergency test',
    address: 'this address',
    patients: 'leyneru',
    doctor: 'the good doctor',
    agent: 'the best agent',
    healthUnitDestin: 'Mat hospital',
    priority: 'Hight',
    state: 'Create',
    emergencyCode: '455454-Paro',
    registryDate: '18-09-2023 21H:09m',
    bloodPressure: '120/80',
    respiratoryRate: '120/80',
    bodyTemperature: '120/80',
    heartRate: '120/80'
  },
  {
    id: '6508c67b6b80443b91a2ec8f',
    emergency: 'Emergency test',
    address: 'this address',
    patients: 'leyneru',
    doctor: 'the good doctor',
    agent: 'the best agent',
    healthUnitDestin: 'Mat hospital',
    priority: 'Hight',
    state: 'Create',
    emergencyCode: '455454-Paro',
    registryDate: '18-09-2023 21H:09m',
    bloodPressure: '120/80',
    respiratoryRate: '120/80',
    bodyTemperature: '120/80',
    heartRate: '120/80'
  }
]
