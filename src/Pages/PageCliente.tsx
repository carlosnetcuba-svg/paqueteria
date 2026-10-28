import React, { useState } from 'react'
import { BadgeCheckIcon, ChevronRightIcon, Container, Forklift, GitBranchIcon, KazakhTenge, PackageCheck, SearchIcon, ShipCargo, TruckElectric, UserStar, Warehouse } from "lucide-react"

//import { Marker, MarkerContent, MarkerIcon } from "@/components/ui/marker"

import { Marker, MarkerContent, MarkerIcon } from '@/components/ui/marker'
import { etapasparafiltrar as et } from '@/context/utils'
import type Etapa from '@/context/utils'
import { Item, ItemActions, ItemContent, ItemDescription, ItemMedia, ItemTitle } from '@/components/ui/item'
import { Field, FieldDescription, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useActionState } from 'react'
import { Supabasequeries } from '@/context/queries'
import { toast } from '@/components/ui/toast'
import { Undo2 } from 'lucide-react'


export const PageCliente = () => {

        const [currentPaquete,setcurrentPaquete]=useState({realid:"",id:"",etapa:0})
        const currentEtapa=currentPaquete.etapa
        const etapasfiltradas = et.filter((item, index) => (currentPaquete.etapa + 10 > index * 10))


   

    const [errorState, thisaction, ispendig] = useActionState(
        

        async (prevForm, formData) => {
            const realid = formData.get("realid")
            console.log(realid)
            if(!realid){return "Escriba correctamente el nombre del paquete"}
             if(realid.length<4||realid.length>15){return "Paquete no valido"}

            const { data, error } = await Supabasequeries.ObtenerEtapadePaquete(realid)



            if (data) {
                toast.add({
                    title: "Informacion",
                    description: data.length?`Se encontro un resultado`:"Paquete no encontrado",
                })
                if(data.length){
                console.log(data.at(0))
                setcurrentPaquete(data.at(0))
                }
                
                return ""
            } else if (error) {
                toast.add({
                    title: "Error",
                    description: typeof error === "string" ? error : "Ha ocurrido un error"

                })
                return typeof error === "string" ? error : "Ha ocurrido un error";
            }


            return ""
        }, "")
        

        function resolveRegresarClick(){setcurrentPaquete({realid:"",id:"",etapa:0})}


        function Desglosado(){
            return (      <div className="flex  w-full
             max-w-sm flex-col gap-4 py-4 px-6 ">
                {etapasfiltradas.map((e, index) => (
                    <Item
                        key={e.value}
                        variant="outline"
                        size="xs" 
                        
                       className={
  Number(e.value) === Number(currentPaquete.etapa)
    ? 'bg-yellow-300 font-bold'          // igual: resaltado
    : Number(e.value) < Number(currentPaquete.etapa)
      ? 'line-through text-gray-400'    // menor: tachado
      : undefined                       // mayor: normal
}
                    >
                        <ItemMedia variant="icon">{getIcon(index)}</ItemMedia>
                        <ItemContent>
                            <ItemTitle>{e.label}</ItemTitle>
                        </ItemContent>
                    </Item>
                ))}
            </div>)
        }


        function Formulario(){
            return (  <form className=" flex w-full 
            " action={thisaction}>
            <FieldGroup >
                
                <Field>
                    <FieldLabel htmlFor="realid">Identificador</FieldLabel>
                    <Input className=" " name='realid' id="realid" placeholder=" paquete... " />
                </Field>
                <Field>
                    <FieldDescription className={errorState ? 'text-red-500' : undefined} >
                        {errorState?errorState:" Escriba el identificador de su paquete"}
                    </FieldDescription>
                </Field>
                <Field orientation="horizontal">
                    <Button type="submit" disabled={ispendig}>{ispendig?"Buscando":"Buscar"}</Button>
                </Field>
            </FieldGroup>
            </form>)
        }
        
        function Resultante(){

            return (<div className="cursor-pointer  flex w-full max-w-md flex-col ">
      <Item variant="outline" size="sm" render={
        <div onClick={resolveRegresarClick}>
        <ItemMedia>
          <BadgeCheckIcon  className="size-5" />
        </ItemMedia><ItemContent>
          <ItemTitle>Paquete en el sistema</ItemTitle>
        </ItemContent><ItemActions>
         <Undo2 />
        </ItemActions>
        </div>
    } />
    </div>)
        }






       if (!currentPaquete.etapa) {
  return (
    <div className="min-h-dvh w-full flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md
       bg-white rounded-2xl shadow-lg
        p-6 flex 
        flex-col items-center ">
        <img
          src="/logo.png"
          alt="Logo"
          width={100}
          height={100}
          className="object-contain"
        />
        <Formulario />
      </div>
    </div>
  )
}
else{

 return (
    <div className="min-h-dvh w-full flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg
       p-6 flex flex-col items-center ">
        <Resultante></Resultante>
        <Desglosado></Desglosado>
      </div>
    </div>
  )





}


   




    
}


function getIcon(n: number) {

    return (

        n == 0 ? <MarkerIcon><Warehouse /></MarkerIcon> :
            n == 1 ? <MarkerIcon><Container /></MarkerIcon> :
                n == 2 ? <MarkerIcon><ShipCargo /></MarkerIcon> :
                    n == 3 ? <MarkerIcon><Forklift /></MarkerIcon> :
                        n == 4 ? <MarkerIcon><UserStar /></MarkerIcon> :
                            n == 5 ? <MarkerIcon><Warehouse /></MarkerIcon> :
                                n == 6 ? <MarkerIcon><TruckElectric /></MarkerIcon> :
                                    <MarkerIcon><PackageCheck /></MarkerIcon>






    )
}











