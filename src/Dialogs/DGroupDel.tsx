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






export function DGroupDel() {

  
  const [open, setOpen] = useState(false)
  const [errorState,FormAction,isPending]= useActionState(



  async (prev,Formdata)=>{
    //TODO REINICIAR EL SELECTOR Y LO DEMAS
    try{
    
   
     console.log(Formdata.get("grupoid"))
     const g=Formdata.get("grupoid")


       console.log({g})

    if (!g) {
      return "Faltan campos obligatorios" 
    }else{
      
  const { data, error } =await  Supabasequeries.EliminaGrupo(g)

console.log("DATA:",data)
console.log("ERROR:",error)

setOpen(false)

if(!error){
  toast.add({
  title: "Tarea completada",
  description: `Se elimino el grupo ${g} y sus paquete(s)` ,
})
return ""
}
if (typeof error === 'object' && error !== null && 'message' in error) {
   toast.add({
  title: "Error",
description: error.message
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

toast.add({
  title: "Error",
description: typeof e === "string" ? e :"Ha ocurrido un error"
})


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
          <ItemTitle>Elimina muchos paquetes 
          </ItemTitle>
          <ItemDescription>
           Elimina un grupo y todos los paquetes que estan dentro de ese grupo
          </ItemDescription>
        </ItemContent>

      </Item>
          
          } />
        <DialogContent className="sm:max-w-sm">
          <form action={FormAction}>
          <DialogHeader>
            <DialogTitle>Eliminar </DialogTitle>
            <DialogDescription>
             Elimina un grupo por su nombre o identificador. Cuidado!! Los paquetes del grupo tambien se borraran
            </DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="name-1">Nombre del grupo/bulto</Label>
              <Input id="name-1" name="grupoid" placeholder="grupo01" />
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
