import { demandTableColumns } from './columns'
import { demandSeed } from '../../types/index'
import { DataTable } from './data-table'
import ButtonMenu from '../ButtonMenu'
import { useState } from 'react'
import { DialogDemand } from '../DialogDemand'
export default function DemandTable () {
  const [openDialog, setOpenDialog] = useState(false)
  const [enabledUpd, setEnabledUpd] = useState(false)
  const [enabledDel, setEnabledDel] = useState(false)
  return (
    <div className='w-full h-full'>
      <ButtonMenu
        enabledUpd={enabledUpd}
        enabledDel={enabledDel}
        setOpenDialog={setOpenDialog}
      ></ButtonMenu>
      <DialogDemand
        open={openDialog}
        setOpenDialog={setOpenDialog}
      ></DialogDemand>
      <DataTable
        setEnabledUpd={setEnabledUpd}
        setEnabledDel={setEnabledDel}
        columns={demandTableColumns}
        data={demandSeed}
      />
    </div>
  )
}
