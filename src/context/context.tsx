import { useContext,createContext,useState } from "react";
const GlobalContext= createContext();
import supabasecl from "./supabasecl";
import { useEffect } from "react";
import { Supabasequeries } from "./queries";




export const GlobalContextProvider=({children})=>{
   
    const [session,setSession]=useState()

    const [paquetes,Setpaquetes]=useState([])
      const [grupos,SetGrupos]=useState([])
      const [loading,SetLoading]=useState(true)
      const [loadingg,SetLoadingg]=useState(true)
      const [error,SetError]=useState<unknown>(null)
      const [errorg,SetErrorg]=useState<unknown>(null)



         async function hacerFetchpaquetes(){
            const {error,data}=await Supabasequeries.ObtenerTodosPaquetes()    
          if(error){SetError(error);console.error(error); }
          else if(data){
            Setpaquetes(data)
          }
           SetLoading(false)
        }
          async function hacerFetchGrupos(){
            const {error,data}=await Supabasequeries.ObtenerTodosGrupos()    
          if(error){SetErrorg(error);console.error(error); }
          else if(data){
            SetGrupos(data)
          }
           SetLoadingg(false)
        }
    


      function reloadfetch(){
        SetLoading(true)
        SetError(null)
         SetErrorg(null)
        hacerFetchpaquetes()
        hacerFetchGrupos()
      }


    useEffect(()=>{  
        hacerFetchpaquetes()
        hacerFetchGrupos()
       },[])






    useEffect(()=>{
//1) check in first render for a session
        async function getInitialSession(){
           try{
             const {data,error}=await supabasecl.auth.getSession();
             if (error){throw error;}
            console.log("SUCCESS")
           console.log(data)
           }
           catch(error){console.error("ERROR GETTING SESSION",error.message)}
      

        }
        getInitialSession()
        //Listen for changes in auth state
        supabasecl.auth.onAuthStateChange((_event,session)=>{
            console.log("Cambio la secion",_event)
            console.log("Cambio la secion",session)
            setSession(session)
        })



    },[]);



    //Devuelve Data y Error
    const iniciarsesion= async (correo:string,clave:string)=>{

        console.log("iniciarsesion llamada")
        console.log(correo)
         console.log(clave)
        
        try{
        const {error,data}= await supabasecl.auth.signInWithPassword({
            email: correo,
            password: clave,
            })
           
            console.log("VISALIZANDO EN EL CONTEXTOini")
             console.dir(correo)
            console.dir(clave)
           console.dir(error)
            console.dir(data)
             console.log("VISALIZANDO EN EL CONTEXTOfin")
             return {error:error?.message,data:data}

    }
        catch(errorc){
            console.log("iniciarsesion catch",errorc)
            return {error:"HA OCURRIDO UN ERROR"}
            }
        

        
    }

    
    //Devuelve Data y Error
    const cerrarsession = async ():Promise<null|string>=>{
        
        try{
        const {error}= await supabasecl.auth.signOut()
            if(error){return error.message}
            else {return ""}
    }
        catch(errorc){
            console.log("cerrarsession catch",errorc)
            return "NO SE PUDO CERRAR LA SECION catch"
            }
        
    }



    
    

    return (
        <GlobalContext.Provider value={{session,iniciarsesion,cerrarsession,
        paquetes,grupos,loading,loadingg,error,errorg,reloadfetch}}>
            {children}
        </GlobalContext.Provider>
    );
    
};

export const useGlobal=()=>{
    return useContext(GlobalContext)
}
