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
}
export default function FuncionalButton ({ bTitle, toolTipTitle, Icon }: FuncionalButtonProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant='ghost'>
            {Icon}
            {bTitle != null && <p>{bTitle}</p>}
          </Button>
        </TooltipTrigger>
        <TooltipContent className='bg-black text-white'>
          {toolTipTitle != null && <p>{toolTipTitle}</p>}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
