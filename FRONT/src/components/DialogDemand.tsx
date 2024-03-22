import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { FormDemand } from './FormDemand'

interface DialogDemandProps {
  open: boolean
  setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>
}
export function DialogDemand ({ open, setOpenDialog }: DialogDemandProps) {
  return (
    <Dialog open={open}>
      <DialogContent className='sm:max-w-[700px]'>
        <DialogPrimitive.Close
          onClick={() => {
            setOpenDialog(!open)
          }}
          className='absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground'
        >
          <X className='h-4 w-4' />
          <span className='sr-only'>Close</span>
        </DialogPrimitive.Close>
        <DialogHeader>
          <DialogTitle className='pb-4'>Demand data</DialogTitle>
        </DialogHeader>
        <FormDemand></FormDemand>
      </DialogContent>
    </Dialog>
  )
}
