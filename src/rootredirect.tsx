import React from 'react'
import { Navigate, } from 'react-router-dom'
import { useGlobal } from './context/context'


const RootRedirect = () => {


    const {session}=useGlobal()
    console.log("El valor de la secion es ",session)
    if(session===undefined){
      console.log("RootRedirect paso por aqui seccion aun undefined")
      return <h1> LOADING</h1>
    }
    else{

      return session?<Navigate to={"/dashboard"}></Navigate>
      :
     <Navigate to={"/signin"}></Navigate>
     
      ;


    }








}

export default RootRedirect;