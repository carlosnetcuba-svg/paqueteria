
import { EtapaToLabel } from '@/context/utils'
import Paquete2 from '@/components/Paquete2';

import Cargando from '@/components/Cargando';
import { useContext, useState } from 'react';
import { useGlobal } from '@/context/context';
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import Grupo2 from '@/components/Grupo';







const Dash = () => {

const { paquetes,grupos,loading,loadingg,reloadfetch,error,errorg } = useGlobal()
  const [filergroup,Setfilergroup]=useState("")

  
function handlefilter1change(e:React.ChangeEvent<HTMLInputElement>){
Setfilergroup(e.target.value)
console.log(e.target.value)
}

  return (

    <div >
     
      
       <h1 className='flex justify-start ml-0 m-5 text-2xl font-bold color-gray-700'>Grupos</h1>
        <Field className='flex flex-row items-center'>
      
      <Input id="filergroup" type="text" placeholder="group..."
      value={filergroup}
     onChange={handlefilter1change}
   />
      <FieldDescription>
        Filtrar por grupo
      </FieldDescription>
    </Field>
      
        <hr />
               <br />
      {loadingg?(<Cargando/>):(errorg?(<p>{getErr(error)}</p>):(<Todosgrupos />))}

<br />
     <h1 className='flex justify-start m-5 text-2xl font-bold color-gray-700'>Paquetes</h1>
     
        <hr />
               <br />
      {loading?(<Cargando/>):(error?(<p>{getErr(error)}</p>):(<Todospaquetes />))}

 <br /> <br /> <br />
    </div>
  )
}



export default Dash


const  Todospaquetes=()=>{
  const { paquetes} = useGlobal()
  return (
    <div className="flex flex-wrap gap-4">
  {paquetes.map((p) => (
    <Paquete2 nombre={p.realid} etapa={p.etapa} key={p.id} />
  ))}
</div>

  )
}

const  Todosgrupos=()=>{
    const { grupos} = useGlobal()
  return (
    <div className="flex flex-wrap gap-4">
  {grupos.map((g) => (
    <Grupo2 nombre={g.nombre} cantidadpaquetes={countGroup(g.nombre)} key={g.id} />
  ))}
</div>

  )
}

function getErr(error) {


  if (typeof error === 'string') return error
  if (typeof error?.message === 'string') return error.message
  return 'Error al cargar los elementos'
}

function countGroup(nombre:string):number{
    const { paquetes} = useGlobal()
    try{
      return paquetes.filter((i) => {return i.grupo.nombre === nombre}).length
      }
      catch(e){
      console.error(e)
      return 0
    }
  
}
