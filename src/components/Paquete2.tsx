import React from 'react'
import { Badge } from './ui/badge'
import { toast } from './ui/toast'
import { EtapaToLabel } from '@/context/utils'
import { Tooltip,TooltipTrigger,TooltipContent } from './ui/tooltip'

const Paquete2 = ({nombre,etapa}:{nombre:string,etapa:number}) => {
   
  const className = colorPorEtapa[etapa] ?? 'bg-gray-900 text-white'

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
10: 'bg-blue-200 text-gray-900',
20: 'bg-blue-300 text-gray-900',
30: 'bg-blue-400 text-gray-900',
40: 'bg-blue-500 text-white',
50: 'bg-blue-600 text-white',
60: 'bg-blue-700 text-white',
70: 'bg-blue-800 text-white',
80: 'bg-blue-900 text-white',
}
