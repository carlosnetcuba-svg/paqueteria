import React, { useState } from 'react'
import { BadgeCheckIcon, ChevronRightIcon, Container, Forklift, GitBranchIcon, PackageCheck, SearchIcon, ShipCargo, TruckElectric, UserStar, Warehouse } from "lucide-react"

//import { Marker, MarkerContent, MarkerIcon } from "@/components/ui/marker"

import { Marker, MarkerContent, MarkerIcon } from '@/components/ui/marker'
import { etapas as et } from '@/context/utils'
import type Etapa from '@/context/utils'
import { Item, ItemActions, ItemContent, ItemDescription, ItemMedia, ItemTitle } from '@/components/ui/item'
import { Field, FieldDescription, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useActionState } from 'react'
import { SupabaseClient } from '@supabase/supabase-js'
import { Supabasequeries } from '@/context/queries'
import { toast } from '@/components/ui/toast'

export const PageCliente = () => {

const [currentPaquete,setcurrentPaquete]=useState({realid:"",id:"",etapa:0})
   
    const etapasfiltradas = et.filter((item, index) => (currentPaquete.etapa + 10 > index * 10))


   

    const [errorState, thisaction, ispendig] = useActionState(
        

        async (prevForm, formData) => {
            const realid = formData.get("realid")
            console.log(realid)
            if(!realid){return "Escriba correctamente el nombre del paquete"}

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
        

        function Formulario(){
            return (  <form className="self-start  flex flex-col items-center  gap-4 py-12 px-6 text-center w-full max-w-sm" action={thisaction}>
            <FieldGroup >
                
                <Field>
                    <FieldLabel htmlFor="realid">Identificador</FieldLabel>
                    <Input className="max-w-[450px]" name='realid' id="realid" placeholder=" paquete... " />
                </Field>
                <Field>
                    <FieldDescription>
                        {errorState?errorState:" Escriba el identificador de su paquete"}
                    </FieldDescription>
                </Field>
                <Field orientation="horizontal">
                    <Button type="submit">Buscar</Button>
                </Field>
            </FieldGroup></form>)
        }
        
        function Resultante(){

            return (<div className="flex w-full max-w-md flex-col gap-6">
      <Item variant="outline" size="sm" render={<a href="#"><ItemMedia>
          <BadgeCheckIcon  className="size-5" />
        </ItemMedia><ItemContent>
          <ItemTitle>Paquete en el sistema:</ItemTitle>
        </ItemContent><ItemActions>
          <ChevronRightIcon  className="size-4" />
        </ItemActions></a>} />
    </div>)
        }


    return (

        <div className=" flex flex-col sm:flex-row gap-4 w-full min-h-dvh sm:justify-center sm:items-center p-4 sm:p-10">
               
               
                {currentPaquete.etapa?<Resultante></Resultante>:<Formulario></Formulario>}
                
            
           <div className="flex w-full max-w-sm flex-col gap-4 py-12 px-6 ">
                {etapasfiltradas.map((e, index) => (
                    <Item
                        key={e.value}
                        variant="outline"
                        size="xs"
                        className={Number(e.value) < currentPaquete.etapa ? 'line-through text-gray-400' : undefined}
                    >
                        <ItemMedia variant="icon">{getIcon(index)}</ItemMedia>
                        <ItemContent>
                            <ItemTitle>{e.label}</ItemTitle>
                        </ItemContent>
                    </Item>
                ))}
            </div>



        </div>



    )
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











