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
  import { useGlobal } from "@/context/context"
import { Item, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "@/components/ui/item"
import { InboxIcon, PackagePlus, Trash } from "lucide-react"



export function DPkgCreate({}:{}) {

  
  const [open, setOpen] = useState(false)
  const {grupos}=useGlobal()
  const [errorState,FormAction,isPending]= useActionState(
  


  async (prev,Formdata)=>{
    //TODO REINICIAR EL SELECTOR Y LO DEMAS
    try{
    
    console.dir(Formdata)

     const realid=Formdata.get("realid");
     const etapa=Formdata.get("etapano");
     const grupo=Formdata.get("grupo")



    if (!etapa || !grupo) {
      return "Faltan campos obligatorios" 
    }
   if (!grupos.some((g) => g.nombre === grupo)) {
      return "El grupo designado no existe " 
   }
    
    else{
      
  const { data, error } =await  Supabasequeries.CrearPaquete(realid,grupo,etapa)

console.log("DATA:",data)
console.log("ERROR:",error)

setOpen(false)

if(data){
  toast.add({
  title: "Tarea completada",
  description: `Paquete ${realid} subido correctamente`,
})

return  ""
}
if (typeof error === 'object' && error !== null && 'message' in error) {
   toast.add({
  title: "Error",
description: error.message.includes("violates foreign key constraint")?"No se encontro el grupo. Debe crear primero el grupo":error.message
})
  } else{
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
         <PackagePlus />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Crea un paquete 
          </ItemTitle>
          <ItemDescription>
           Crea un nuevo paquete, añadelo a un grupo y asignale una etapa
          </ItemDescription>
        </ItemContent>

      </Item>

        } />
        <DialogContent className="sm:max-w-sm">
          <form action={FormAction}>
          <DialogHeader>
            <DialogTitle>Grupo y Etapa</DialogTitle>
            <DialogDescription>
             Elege la etapa y el grupo al que pertence el paquete
            </DialogDescription>
          </DialogHeader>
          <FieldGroup>
           
           
            <Field>
              <Label htmlFor="name-1">Nombre/Id paquete</Label>
              <Input id="realid" name="realid" placeholder="paquete..."
              />
            </Field>

            <Field>
              <Label htmlFor="name-1">Grupo</Label>
              <Input id="name-1" name="grupo" placeholder="grupo..."
              />
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
            <Button disabled={isPending} type="submit">Aceptar</Button>
         
          </DialogFooter>
             <p className="text-red-600">{errorState}</p>
             </form>
        </DialogContent>
   
    </Dialog>
  )
}
