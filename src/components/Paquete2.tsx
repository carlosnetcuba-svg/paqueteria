import React from 'react'
import { Badge } from './ui/badge'
import { toast } from './ui/toast'
import { EtapaToLabel } from '@/context/utils'
import { Tooltip,TooltipTrigger,TooltipContent } from './ui/tooltip'

const Paquete2 = ({nombre,etapa}:{nombre:string,etapa:number}) => {
   
  const className = colorPorEtapa[etapa] ?? 'bg-gray-400'

  return (
  
   <Tooltip >
      <TooltipTrigger render={

      
      <Badge className={` ${className} cursor-default ` } onClick={async()=>{ 
       const copied= await copyToClipboard(nombre)
        if(copied){toast.add({type: "info", description: "Elemento copiado en el portapapeles"})}}
      } 
         >{nombre}</Badge>
   
      } />
      <TooltipContent>
        <p>{EtapaToLabel(etapa)}</p>
      </TooltipContent>
    </Tooltip>



  )
}

export default Paquete2


async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch {
    return false
  }
}

const colorPorEtapa: Record<number, string> = {
  10: 'bg-amber-600',
  20: 'bg-blue-600',
  30: 'bg-green-600',
  40: 'bg-red-600',
  50: 'bg-purple-600',
  60: 'bg-pink-600',
  70: 'bg-cyan-600',
  80: 'bg-orange-600',
}
