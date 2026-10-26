
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
import Grafico from '@/components/Grafico';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { etapasparafiltrar } from '@/context/utils';






const Dash = () => {

  const { paquetes, grupos, loading, loadingg, reloadfetch, error, errorg } = useGlobal()
  const [filergroup, Setfiltergroup] = useState("")
  const [filerpaquete, Setfilterpaquete] = useState("")
  const [filteretapa, Setfilteretapa] = useState<number>(0)


  function handlefilterg(e: React.ChangeEvent<HTMLInputElement>) {
    Setfiltergroup(e.target.value)
    Setfilterpaquete("")
    Setfilteretapa(0)
    console.log(e.target.value)
  }
  function handlefilterp(e: React.ChangeEvent<HTMLInputElement>) {
    Setfilterpaquete(e.target.value)
    Setfiltergroup("")
    console.log(e.target.value)
  }

  const handleEtapaChange =  (value: string | null) => {
  console.log('etapa seleccionada:', value)
  const parsed = value === "0" ? 0 : Number(value)
  Setfiltergroup("")
  Setfilteretapa(parsed)
  console.log("parseetapa",parsed)
}




  return (

    <div >


      <h1 className='flex justify-start ml-0 m-5 text-2xl font-bold color-gray-700'>Grupos/Bultos</h1>
      <Field className='flex flex-row items-center'>

        <Input 
        className='w-full max-w-[250px]'
        id="filergroup" type="text" 
          placeholder="group..."
          value={filergroup}
          onChange={handlefilterg}
        />
        <FieldDescription className='hidden sm:block'>
          Filtrar los grupos
        </FieldDescription>
      </Field>

      <hr />
      <br />
      {loadingg ? (<Cargando />) : (errorg ? (<p>{getErr(error)}</p>) : (<Todosgrupos filter={filergroup} />))}

      <br />
      <h1 className='flex justify-start m-5 text-2xl font-bold color-gray-700'>Paquetes</h1>
      <Field className='flex flex-row items-center'>

        <Input className='w-full max-w-[250px]' id="filergroup" type="text" placeholder="paquete..."
          value={filerpaquete}
          onChange={handlefilterp}
        />
        <FieldDescription>
          Filtrar por nombre de paquete
        </FieldDescription>
      </Field>
        <br />
       <Field className='flex flex-row items-center'>

      <Select items={etapasparafiltrar} onValueChange={handleEtapaChange}>
      <SelectTrigger className="w-full max-w-[250px]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Etapa</SelectLabel>
          {etapasparafiltrar.map((e) => (
          <SelectItem key={e.value} value={e.value}>
              {e.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
        <FieldDescription>
          Filtrar por la etapa que se encuetra el paquete
        </FieldDescription>
      </Field>

      <hr />
      <br />
      {loading ? (<Cargando />) : (error ? (<p>{getErr(error)}</p>) : (<Todospaquetes filteretapa={filteretapa} filter={filerpaquete} />))}

      <br /> <br /> <br />
      <Grafico>
        
      </Grafico>


    </div>
  )
}



export default Dash


const Todospaquetes = ({filter,filteretapa}:{filter:string,filteretapa:number}) => {
  const { paquetes } = useGlobal()

  const filtrados = paquetes.filter((p) => {
  const coincideNombre = p.realid.toLowerCase().includes(filter.toLowerCase())
  const coincideEtapa = filteretapa == 0 || filteretapa == p.etapa
  return coincideNombre && coincideEtapa
})
const contador = filtrados.length
  return (
    <div>
    <div className="flex flex-wrap gap-4">
      {filtrados.map((p) => ( <Paquete2 key={p.id} nombre={p.realid} etapa={p.etapa} />))}
    </div>
     <p>Mostrando {contador} paquetes de un total de {paquetes.length}</p> 
</div>
  )
}

const Todosgrupos = ({filter}:{filter:string,filteretapa:number}) => {
  const { grupos } = useGlobal()
  return (
    <div className="flex flex-wrap gap-4">
      {grupos.map((g) => (
        g.nombre.toLowerCase().includes(filter.toLowerCase())?
         <Grupo2 nombre={g.nombre} cantidadpaquetes={countGroup(g.nombre)} key={g.id} />:
        <></>
      ))}
    </div>

  )
}

function getErr(error) {


  if (typeof error === 'string') return error
  if (typeof error?.message === 'string') return error.message
  return 'Error al cargar los elementos'
}

function countGroup(nombre: string): number {
  const { paquetes } = useGlobal()
  try {
    return paquetes.filter((i) => { return i.grupo.nombre === nombre }).length
  }
  catch (e) {
    console.error(e)
    return 0
  }

}
