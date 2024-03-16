import { z } from 'zod'

export const demandSchema = z.object({
  registryDate: z.date({
    required_error: 'The register date can not be null',
    invalid_type_error: 'Please review the format date'
  }).max(new Date(), { message: 'The register date is incorrect' }),
  emergency: z.string({ required_error: 'The emergency can not be null', invalid_type_error: 'Emergency must be a string' }),
  address: z.string({ required_error: 'The address can not be null', invalid_type_error: 'Address must be a string' }),
  respiratoryRate: z.number({ required_error: 'The respiratory rate can not be null', invalid_type_error: 'Respiratory rate must be a number' }),
  bodyTemperature: z.number({ required_error: 'The body temperature can not be null', invalid_type_error: 'Body temperature must be a number' }),
  heartRate: z.number({ required_error: 'The heart rate can not be null', invalid_type_error: 'Heart rate must be a number' }),
  bloodPressure: z.number({ required_error: 'The blood pressure can not be null', invalid_type_error: 'Blood pressure must be a number' }),
  patients: z.string({ required_error: 'The patients can not be null', invalid_type_error: 'Patients must be a string' }),
  emergencyCode: z.string({ required_error: 'The emergency code can not be null', invalid_type_error: 'Emergency code must be a string' }).length(6, { message: 'Emergency code must be exactly 6 characters long' }),
  doctor: z.string({ required_error: 'The doctor can not be null', invalid_type_error: 'Doctor must be a string' }),
  agent: z.string({ required_error: 'The agent can not be null', invalid_type_error: 'Agent must be a string' }),
  healthUnitDestin: z.string({ required_error: 'The health unit destine can not be null', invalid_type_error: 'Health unit destine must be a string' }),
  priority: z.enum(['High ', 'Half', 'Low'], { required_error: 'The priority can not be null' }),
  status: z.enum(['Create ', 'InProcess', 'Completed'], { required_error: 'The status can not be null' })

}).required()
