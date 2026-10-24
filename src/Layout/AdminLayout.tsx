
import Navbar from "@/Layout/AdminNavbar";
import { Outlet } from "react-router-dom";
import { useEffect,useState } from "react";
import { Supabasequeries } from "@/context/queries";

export default function AdminLayout() {
      const [paquetes,Setpaquetes]=useState([])


    useEffect(()=>{  
        
        async function hacerFetch(){

            const {error,data}=await Supabasequeries.ObtenerTodosPaquetes()    
          if(error){alert("Ha ocurrido un error")}
          else if(data){
            Setpaquetes(data)
          }
       
        }
        hacerFetch()

       },[])
  return (
    <div>
      <Navbar />             
      <main className=' p-4 sm:p-10 '>
        <Outlet context={{ paquetes }} />           
      </main>
    </div>
  );
}

