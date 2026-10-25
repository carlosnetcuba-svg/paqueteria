
import Navbar from "@/Layout/AdminNavbar";
import { Outlet } from "react-router-dom";
import { useGlobal } from "@/context/context";
import { Navigate } from "react-router-dom";


export default function AdminLayout() {
  
   const {session}=useGlobal()
    console.log("El valor de la secion es ",session)
    if(session===undefined){
      console.log("RootRedirect paso por aqui seccion aun undefined")
      return <h1> LOADING</h1>
    } else{

      return session?( <div>
      <Navbar />             
      <main className=' p-4 sm:p-10 '>
        <Outlet  />           
      </main>
    </div>)
      :
    ( <Navigate to={"/signin"}></Navigate>)
     
}}

