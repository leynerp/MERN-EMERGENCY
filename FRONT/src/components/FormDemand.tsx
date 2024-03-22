'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from './ui/textarea'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from './ui/select'
import { json } from 'stream/consumers'
import { EmergencyCode, HealthUnitDestiny } from '@/types'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'

export const formSchema = z
  .object({
    emergency: z.string({
      required_error: 'The emergency can not be null',
      invalid_type_error: 'Emergency must be a string'
    }),
    address: z.string({
      required_error: 'The address can not be null',
      invalid_type_error: 'Address must be a string'
    }),
    respiratoryRate: z.coerce.number({
      required_error: 'The respiratory rate can not be null',
      invalid_type_error: 'Respiratory rate must be a number'
    }),
    bodyTemperature: z.string({
      required_error: 'The body temperature can not be null',
      invalid_type_error: 'Body temperature must be a number'
    }),
    heartRate: z.coerce.number({
      required_error: 'The heart rate can not be null',
      invalid_type_error: 'Heart rate must be a number'
    }),
    bloodPressure: z.string({
      required_error: 'The blood pressure can not be null',
      invalid_type_error: 'Blood pressure must be a number'
    }),
    patients: z.string({
      required_error: 'The patients can not be null',
      invalid_type_error: 'Patients must be a string'
    }),
    emergencyCode: z
      .string({
        required_error: 'The emergency code can not be null',
        invalid_type_error: 'Emergency code must be a string'
      })
      .length(6, {
        message: 'Emergency code must be exactly 6 characters long'
      }),
    doctor: z.string({
      required_error: 'The doctor can not be null',
      invalid_type_error: 'Doctor must be a string'
    }),
    healthUnitDestin: z.string({
      required_error: 'The health unit destine can not be null',
      invalid_type_error: 'Health unit destine must be a string'
    }),
    priority: z.enum(['High ', 'Half', 'Low'], {
      required_error: 'The priority can not be null'
    }),
    status: z.enum(['Create ', 'InProcess', 'Completed'], {
      required_error: 'The status can not be null'
    })
  })
  .required()
export function FormDemand () {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema)
  })

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log(JSON.stringify(data, null, 2))
  }
  const handleError = (e) => {
    console.log(JSON.stringify(e, null, 2))
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit, handleError)}
        className='flex flex-col items-end space-y-8'
      >
        <div className='grid w-full grid-cols-1 sm:grid-cols-2   gap-4 '>
          <FormField
            control={form.control}
            name='patients'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Patients</FormLabel>
                <FormControl>
                  <Input placeholder='Leyner Patterson...' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='address'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Input placeholder='Av31 /45 and 56...' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='emergency'
            render={({ field }) => (
              <FormItem className='col-span-2'>
                <FormLabel>Emergency</FormLabel>
                <FormControl>
                  <Textarea
                    className='res'
                    placeholder='Patients whit a hurt... '
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className='flex gap-x-3'>
            <FormField
              control={form.control}
              name='respiratoryRate'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Resp/Rate</FormLabel>
                  <FormControl>
                    <Input type='number' placeholder='12' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='bodyTemperature'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Temperature</FormLabel>
                  <FormControl>
                    <Input placeholder='36.5' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='heartRate'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pulse</FormLabel>
                  <FormControl>
                    <Input type='number' placeholder='60' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='bloodPressure'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Blood/P</FormLabel>
                  <FormControl>
                    <Input placeholder='90/60' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name='doctor'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Doctor</FormLabel>
                <FormControl>
                  <Input placeholder='Leyner Patterson...' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className='flex gap-x-3'>
            <FormField
              control={form.control}
              name='emergencyCode'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Emergency Code</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className='w-[200px]'>
                        <SelectValue placeholder='Select a code' />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Emergency Code</SelectLabel>
                        {EmergencyCode.map((item) => (
                          <SelectItem key={item.code} value={String(item.code)}>
                            {item.name}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='priority'
              render={({ field }) => (
                <FormItem className='space-y-3'>
                  <FormLabel>Priority</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className='flex  space-y-1'
                    >
                      <FormItem className='flex items-center space-x-3 space-y-0'>
                        <FormControl>
                          <RadioGroupItem value='hight' />
                        </FormControl>
                        <FormLabel className='font-normal'>Hight</FormLabel>
                      </FormItem>
                      <FormItem className='flex items-center space-x-3 space-y-0'>
                        <FormControl>
                          <RadioGroupItem value='medium' />
                        </FormControl>
                        <FormLabel className='font-normal'>Half</FormLabel>
                      </FormItem>
                      <FormItem className='flex items-center space-x-3 space-y-0'>
                        <FormControl>
                          <RadioGroupItem value='Low' />
                        </FormControl>
                        <FormLabel className='font-normal'>Low</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name='healthUnitDestin'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='ml-[90px]'>Health Unit Destiny</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className='w-[230px] ml-[90px]'>
                      <SelectValue placeholder='Select a code' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>

                      {HealthUnitDestiny.map((item) => (
                        <SelectItem key={item.code} value={String(item.code)}>
                          {item.name}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {JSON.stringify(form.control._formValues)}
        <Button className='w-[100px] ali' type='submit'>
          Submit
        </Button>
      </form>
    </Form>
  )
}
