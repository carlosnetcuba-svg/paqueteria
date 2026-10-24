import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { toast } from "@/components/ui/toast"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useState } from "react"
import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { etapas } from "@/context/utils"

import { useActionState } from "react"
import { Supabasequeries } from "@/context/queries"
import { Item, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "@/components/ui/item"
import { InboxIcon } from "lucide-react"






export function DialogGroupEditor() {

  
  const [open, setOpen] = useState(false)
  const [errorState,FormAction,isPending]= useActionState(



  async (prev,Formdata)=>{
    //TODO REINICIAR EL SELECTOR Y LO DEMAS
    try{
    
    console.log(Formdata.get("etapano"))
     console.log(Formdata.get("grupoid"))

     const e=Formdata.get("etapano");
     const g=Formdata.get("grupoid")


       console.log({ e, g })

    if (!e || !g) {
      return "Faltan campos obligatorios" 
    }else{
      
  const { data, error } =await  Supabasequeries.ModificarEtapasDelGrupo(g,e)

console.log("DATA:",data)
console.log("ERROR:",error)

setOpen(false)

if(data){
  toast.add({
  title: "Tarea completada",
  description: `Se actualizaron ${data.length} paquete(s)` ,
})
}
if(error){
  toast.add({
  title: "Error",
description: typeof error === "string" ? error :"Ha ocurrido un error"

})
}




      
      return  ""}
  }catch(e){
    console.log("CatchError")
    console.log(e)
  }
 }
 
  ,
  ""
)

  return (
    <Dialog   open={open} onOpenChange={setOpen}>
      
        <DialogTrigger render={
          
           <Item variant="outline" className="hover:bg-gray-300 ">
        <ItemMedia variant="icon">
          <InboxIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Modifica muchos paquetes
</ItemTitle>
          <ItemDescription>
           Modifica todos los paquetes que correspondan a un grupo o bulto
          </ItemDescription>
        </ItemContent>

      </Item>
          
          } />
        <DialogContent className="sm:max-w-sm">
          <form action={FormAction}>
          <DialogHeader>
            <DialogTitle>Modifica muchos paquetes</DialogTitle>
            <DialogDescription>
             Modifica todos los paquetes que correspondan a un grupo o bulto
            </DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="name-1">Identificador del grupo/bulto</Label>
              <Input id="name-1" name="grupoid" placeholder="grupo01" />
            </Field>
            <Field>
              <Label htmlFor="username-1">Etapas</Label>
               <Select name="etapano" items={etapas}>
      <SelectTrigger className="w-full max-w-100">
         <SelectValue placeholder="Seleciona etapa" />
      </SelectTrigger>
      <SelectContent >
        <SelectGroup>
          <SelectLabel>Etapas</SelectLabel>
          {etapas.map((item) => (
            <SelectItem   key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose render={<Button disabled={isPending} variant="outline">Cancel</Button>} />
            <Button disabled={isPending} type="submit">Aceptar</Button >
          </DialogFooter>
             </form>
        </DialogContent>
   
    </Dialog>
  )
}
