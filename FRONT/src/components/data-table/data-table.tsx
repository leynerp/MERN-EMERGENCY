import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable
} from '@tanstack/react-table'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { DataTablePagination } from './Pagination'
import { useEffect, useState } from 'react'

interface DataTableProps<TData, TValue> {
  columns: Array<ColumnDef<TData, TValue>>
  data: TData[]
  setEnabledUpd: React.Dispatch<React.SetStateAction<boolean>>
  setEnabledDel: React.Dispatch<React.SetStateAction<boolean>>
}

export function DataTable<TData, TValue> ({
  columns,
  data,
  setEnabledUpd,
  setEnabledDel
}: DataTableProps<TData, TValue>) {
  const [rowSelection, setRowSelection] = useState({})

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    state: {
      rowSelection
    }
  })
  if (table.getSelectedRowModel().rows.length !== 0) {
    (table.getSelectedRowModel().rows.length === 1) && setEnabledUpd(true)
    setEnabledDel(true)
  } else {
    setEnabledUpd(false)
    setEnabledDel(false)
  }

  /* useEffect(() => {

  }, [table.getSelectedRowModel().rows.length]) */
  return (
    <div className='rounded-md border'>
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length !== 0
            ? (
                table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && 'selected'}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
                ))
              )
            : (
            <TableRow>
              <TableCell colSpan={columns.length} className='h-24 text-center'>
                No results.
              </TableCell>
            </TableRow>
              )}
        </TableBody>
      </Table>
      <div className='w-full border-t bg-muted/50 font-medium'>
        <DataTablePagination table={table}></DataTablePagination>
      </div>
    </div>
  )
}
