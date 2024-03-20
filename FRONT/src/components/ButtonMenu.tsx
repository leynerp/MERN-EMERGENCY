import { Separator } from '@/components/ui/separator'
import FuncionalButton from './FuncionalButton'
import { AddIcon, DelIcon, UpdIcon } from './SvgComponent'
import { useState } from 'react'

interface ButtonMenuProps {
  setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>
}
export default function ButtonMenu ({ ...props }: ButtonMenuProps) {
  const [updDelActive, setupdDelActive] = useState(false)
  const svgH = 20
  const svgW = 20
  return (
    <div className='flex w-full rounded-lg  space-x-3 mt-5 text-sm bg-slate-100'>
      <FuncionalButton
        onClick={() => {
          props.setOpenDialog(true)
        }}
        toolTipTitle='Add demand'
        bTitle='Add'
        Icon={<AddIcon svgH={svgH} svgW={svgW}></AddIcon>}
      ></FuncionalButton>
      <Separator orientation='vertical' className='h-10' />
      <FuncionalButton
        toolTipTitle='Update demand'
        onClick={() => {
          props.setOpenDialog(true)
        }}
        bTitle='Update'
        active={updDelActive}
        Icon={<UpdIcon svgH={svgH} svgW={svgW}></UpdIcon>}
      ></FuncionalButton>
      <Separator orientation='vertical' className='h-10' />
      <FuncionalButton
        toolTipTitle='Delete demand'
        bTitle='Delete'
        active={updDelActive}
        Icon={<DelIcon svgH={25} svgW={25}></DelIcon>}
      ></FuncionalButton>
    </div>
  )
}
