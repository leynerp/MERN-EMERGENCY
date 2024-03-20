import { type Demand } from '@/types'
import { type ColumnDef } from '@tanstack/react-table'
import { Button } from '../ui/button'
import { Checkbox } from '../ui/checkbox'

export const demandTableColumns: Array<ColumnDef<Demand>> = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => {
          table.toggleAllPageRowsSelected(!!value)
        }}
        aria-label='Select all'
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => {
          row.toggleSelected(!!value)
        }}
        aria-label='Select row'
      />
    )

  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => (
      <div className='capitalize'>{row.getValue('status')}</div>
    )
  },
  {
    accessorKey: 'id',
    header: 'ID',
    enableHiding: true
  },
  {
    accessorKey: 'emergency',
    header: 'Emergency'
  },
  {
    accessorKey: 'address',
    header: 'Adres'
  },
  {
    accessorKey: 'patients',
    header: 'Patients'
  },
  {
    accessorKey: 'doctor',
    header: 'Doctor',
    enableHiding: true
  },
  {
    id: 'action',
    cell: ({ row }) => {
      const payment = row.original

      return (
        <>
          <Button variant='ghost'>
            <svg
              fill='#000000'
              height={20}
              width={20}
              viewBox='0 0 24 24'
              id='update-alt'
              className='icon glyph'
            >
              <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
              <g
                id='SVGRepo_tracerCarrier'
                strokeLinecap='round'
                strokeLinejoin='round'
              ></g>
              <g id='SVGRepo_iconCarrier'>
                <path d='M12,3A9,9,0,0,0,6,5.32V3A1,1,0,0,0,4,3V8a1,1,0,0,0,.92,1H10a1,1,0,0,0,0-2H7.11A7,7,0,0,1,19,12a1,1,0,0,0,2,0A9,9,0,0,0,12,3Z'></path>
                <path d='M19.08,15H14a1,1,0,0,0,0,2h2.89A7,7,0,0,1,5,12a1,1,0,0,0-2,0,9,9,0,0,0,15,6.68V21a1,1,0,0,0,2,0V16A1,1,0,0,0,19.08,15Z'></path>
              </g>
            </svg>
          </Button>
          <Button variant='ghost'>
            <svg
              viewBox='0 0 1024 1024'
              height={20}
              width={20}
              fill='#000000'
              className='icon'
              version='1.1'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
              <g
                id='SVGRepo_tracerCarrier'
                strokeLinecap='round'
                strokeLinejoin='round'
              ></g>
              <g id='SVGRepo_iconCarrier'>
                <path
                  d='M512 897.6c-108 0-209.6-42.4-285.6-118.4-76-76-118.4-177.6-118.4-285.6 0-108 42.4-209.6 118.4-285.6 76-76 177.6-118.4 285.6-118.4 108 0 209.6 42.4 285.6 118.4 157.6 157.6 157.6 413.6 0 571.2-76 76-177.6 118.4-285.6 118.4z m0-760c-95.2 0-184.8 36.8-252 104-67.2 67.2-104 156.8-104 252s36.8 184.8 104 252c67.2 67.2 156.8 104 252 104 95.2 0 184.8-36.8 252-104 139.2-139.2 139.2-364.8 0-504-67.2-67.2-156.8-104-252-104z'
                  fill=''
                ></path>
                <path
                  d='M707.872 329.392L348.096 689.16l-31.68-31.68 359.776-359.768z'
                  fill=''
                ></path>
                <path d='M328 340.8l32-31.2 348 348-32 32z' fill=''></path>
              </g>
            </svg>
          </Button>
        </>
      )
    }
  }
]
