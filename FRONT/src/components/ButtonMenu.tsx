import React from 'react'
import { Separator } from '@/components/ui/separator'
import { Button } from './ui/button'
import FuncionalButton from './FuncionalButton'
import { AddIcon, DelIcon, UpdIcon } from './SvgComponent'
export default function ButtonMenu () {
  const svgH = 20
  const svgW = 20
  return (
    <div className='flex w-full rounded-lg  space-x-4 text-sm bg-slate-100'>
      <FuncionalButton
        toolTipTitle='Add demand'
        bTitle='Add'
        Icon={<AddIcon svgH={svgH} svgW={svgW}></AddIcon>}
      ></FuncionalButton>
      <Separator orientation='vertical' className='h-10' />
      <FuncionalButton
        toolTipTitle='Update demand'
        bTitle='Update'
        Icon={<UpdIcon svgH={svgH} svgW={svgW}></UpdIcon>}
      ></FuncionalButton>
      <Separator orientation='vertical' className='h-10' />
      <FuncionalButton
        toolTipTitle='Delete demand'
        bTitle='Delete'
        Icon={<DelIcon svgH={svgH} svgW={svgW}></DelIcon>}
      ></FuncionalButton>
    </div>
  )
}
