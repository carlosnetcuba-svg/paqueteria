import Paquete2 from "./Paquete2"
import Grupo2 from "./Grupo"

export const Trace = () => {
  return (
     <div className="mx-auto flex w-full max-w-sm flex-col gap-3 py-12">
      <Paquete2 etapa={10} nombre="lolas" ></Paquete2>
      <Paquete2 etapa={30} nombre="lolsssssssssssssas"  ></Paquete2>
      <Paquete2 etapa={10} nombre="lolas" ></Paquete2>
      <Paquete2 etapa={40} nombre="lolas" ></Paquete2>
      <Paquete2 etapa={10} nombre="lasdolas" ></Paquete2>
      <Paquete2 etapa={50} nombre="lolas" ></Paquete2>
      <Paquete2 etapa={60} nombre="lolas" ></Paquete2>
      <Grupo2 cantidadpaquetes={34} nombre="Laquese"></Grupo2>
      <Grupo2 cantidadpaquetes={34} nombre="Laquese"></Grupo2>
      <Grupo2 cantidadpaquetes={34} nombre="Laquese"></Grupo2>
      <Grupo2 cantidadpaquetes={34} nombre="Laquese"></Grupo2>
      <Grupo2 cantidadpaquetes={34} nombre="Laquese"></Grupo2>
     
    </div>
  )
}
