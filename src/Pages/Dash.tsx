
import { EtapaToLabel } from '@/context/utils'
import Paquete from '@/components/Paquete'
import { useOutletContext } from 'react-router-dom';



const Dash = () => {

const { paquetes } = useOutletContext<{ paquetes }>();
  
  return (
    <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(200px,1fr))]">
  
  {paquetes.map((p) => (
    <Paquete nombre={p.realid} labeltext={EtapaToLabel(p.etapa)} key={p.id} />
  ))}
</div>
  )
}

export default Dash