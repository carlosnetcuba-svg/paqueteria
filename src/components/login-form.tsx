import { cn } from "cn"

import { Button } from "@/components/ui/button"
import { useActionState } from "react"
import { useGlobal } from "@/context/context"
import { useNavigate } from "react-router-dom"
import { Navigate } from "react-router-dom"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {


  
  const {iniciarsesion,session}=useGlobal();
  const navigate=useNavigate()


  const [errorState,submitAction,isPending]=useActionState(

    //Action a ejecutar
   async (prevFormData,FormData)=>{
      console.dir(FormData)
        const e= FormData.get("email")
       const p=  FormData.get("pass")
   


     try{

     
     const {error,data} = await iniciarsesion(e,p)
     {

      console.log("iniciarsesion se ejecuto","error:",error,"data",data)
      if (error) {return error}
      else{
        navigate("/admin")
      }

     }
    }
    catch(e){
      return "Ha ocurrido un error inesperado"
    }

      return "";
    }

  )

  
if(session===undefined){
      console.log("RootRedirect paso por aqui seccion aun undefined")
      return <h1> LOADING</h1>
    }
    else{

      return session?
     <Navigate to={"/admin"}></Navigate>
      :
      
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Pagin a en Mantenimiento</CardTitle>
        </CardHeader>
        <CardContent>
          <form action={submitAction}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  name="email"
                
                  required
                />
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                 
                </div>
                <Input id="password" type="password" name="pass" required />
              </Field>
              <Field>
                <Button disabled={isPending} type="submit">{isPending?"Cargando":"Acceder"}</Button>
              
              {errorState?(
                 <FieldDescription className="text-center text-red-600">
               {typeof errorState === "string" ? errorState : ""}
                </FieldDescription>
):(
                <FieldDescription className="text-center">
                 Ingrese sus datos para acceder
                </FieldDescription>
                 
                )}



              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
      ;











}}
