import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'
import { Button } from './ui/button'
interface FuncionalButtonProps {
  bTitle?: string
  toolTipTitle?: string
  Icon: React.ReactElement
  active?: boolean
  onClick?: () => void
}
export default function FuncionalButton ({
  bTitle,
  toolTipTitle,
  Icon,
  active = true,
  onClick
}: FuncionalButtonProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            onClick={onClick}
            variant='ghost'
            className='hover:bg-blue-300'
            disabled={!active}
          >
            {Icon}
            {bTitle != null && <p className='px-2'>{bTitle}</p>}
          </Button>
        </TooltipTrigger>
        <TooltipContent className='bg-black text-white'>
          {toolTipTitle != null && <p>{toolTipTitle}</p>}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
