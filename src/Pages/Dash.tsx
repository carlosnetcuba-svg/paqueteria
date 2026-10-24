import React, { useEffect, useState } from 'react'
import { EtapaToLabel } from '@/context/utils'
import Paquete from '@/components/Paquete'
import { Supabasequeries } from '@/context/queries'
const Dash = () => {

    const [paquetes,Setpaquetes]=useState([])


    useEffect(()=>{  
        
        async function hacerFetch(){

            const {error,data}=await Supabasequeries.ObtenerTodosPaquetes()    
          if(error){alert("Ha ocurrido un error")}
          else if(data){
            Setpaquetes(data)
          }
          console.log("useEffect",error,data)
        }
        hacerFetch()

       },[])

  return (
    <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(200px,1fr))]">
  
  {paquetes.map((p) => (
    <Paquete nombre={p.realid} labeltext={EtapaToLabel(p.etapa)} key={p.id} />
  ))}
</div>
  )
}

export default Dash