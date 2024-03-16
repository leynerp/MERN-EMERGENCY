import { type Demand } from '@/types'
import { type ColumnDef } from '@tanstack/react-table'

export const demandTableColumns: Array<ColumnDef<Demand>> = [
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
    id: 'actions',
    cell: ({ row }) => {
      const payment = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='ghost' className='h-8 w-8 p-0'>
              <span className='sr-only'>Open menu</span>
              <MoreHorizontal className='h-4 w-4' />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={async () => { await navigator.clipboard.writeText(payment.id) }}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }
  }
]
