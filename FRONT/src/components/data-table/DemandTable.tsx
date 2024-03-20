import { demandTableColumns } from './columns'
import { demandSeed } from '../../types/index'
import { DataTable } from './data-table'
import ButtonMenu from '../ButtonMenu'
import { useState } from 'react'
import { DialogDemand } from '../DialogDemand'
export default function DemandTable () {
  const [openDialog, setOpenDialog] = useState(false)
  return (
    <div className='w-full h-full'>
      <ButtonMenu setOpenDialog={setOpenDialog}></ButtonMenu>
      <DialogDemand
        open={openDialog}
        setOpenDialog={setOpenDialog}
      ></DialogDemand>
      <DataTable columns={demandTableColumns} data={demandSeed} />
    </div>
  )
}
