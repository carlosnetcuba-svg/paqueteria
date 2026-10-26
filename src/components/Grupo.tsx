import React from 'react'
import { Badge } from './ui/badge'
import { toast } from './ui/toast'
import { EtapaToLabel } from '@/context/utils'
import { Tooltip,TooltipTrigger,TooltipContent } from './ui/tooltip'

const Grupo2 = ({nombre,cantidadpaquetes}:{nombre:string,cantidadpaquetes:number}) => {
   


  return (
  
   <Tooltip >
      <TooltipTrigger render={

      
      <Badge className={` bg-gray-900 text-white cursor-default ` } onClick={async()=>{ 
       const copied= await copyToClipboard(nombre)
        if(copied){toast.add({type: "info", description: "Elemento copiado en el portapapeles"})}}
      } 
         >{nombre}</Badge>
   
      } />
      <TooltipContent>
        <p>{`${cantidadpaquetes} paquetes`}</p>
      </TooltipContent>
    </Tooltip>



  )
}

export default Grupo2


async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch {
    return false
  }
}

