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

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { etapas } from "@/context/utils"

import { useActionState } from "react"
import { Supabasequeries } from "@/context/queries"






export function FormBulto() {

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
    <Dialog>
      
        <DialogTrigger render={<Button variant="outline">Open Dialog</Button>} />
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
              <Input id="name-1" name="grupoid" placeholder="b4432" />
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
            <DialogClose render={<Button variant="outline">Cancel</Button>} />
            <Button type="submit">Aceptar</Button>
          </DialogFooter>
             </form>
        </DialogContent>
   
    </Dialog>
  )
}
