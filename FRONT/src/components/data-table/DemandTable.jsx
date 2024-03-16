import { demandTableColumns } from './columns'
import { demandSeed } from '../../types/index'
import { DataTable } from './data-table'
export default function DemandTable () {
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={demandTableColumns} data={demandSeed} />
    </div>
  )
}
