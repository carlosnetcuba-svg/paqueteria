import { useContext,createContext,useState } from "react";
const GlobalContext= createContext();
import supabasecl from "./supabasecl";
import { useEffect } from "react";




export const GlobalContextProvider=({children})=>{
   
    const [session,setSession]=useState()

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
        <GlobalContext.Provider value={{session,iniciarsesion,cerrarsession}}>
            {children}
        </GlobalContext.Provider>
    );
    
};

export const useGlobal=()=>{
    return useContext(GlobalContext)
}
