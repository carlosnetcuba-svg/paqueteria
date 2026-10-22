import React, { useState } from 'react'
import Navbar from './AdminNavbar'
import { FormBulto } from './FormGrupo'
import { Supabasequeries } from '@/context/queries'
const AdminPage = () => {
  
  



  
  const [FormBultoEnabled,SetFormBultoEnabled]=useState(false)
  const [FormPaqueteEnabled,SetFormPaqueteEnabled]=useState(false)

  async function handleIdBultoClick(){
    console.log("handleIdBultoClick")
    SetFormBultoEnabled(true)

  };


    
  async function handle1PaqueteClick(){
        console.log("handle1PaqueteClick")
      SetFormPaqueteEnabled(true)
  };

    async function handleSubirTablaClick(){
      console.log("handleSubirTablaClick")
      SetFormPaqueteEnabled(true)
  };


  async function handlePrueba() {
    console.log("handlePrueba")
  

  }

  return (
    
    <div>
    <Navbar></Navbar>

    
        
      <div className='flex'>
<ul>
  <li><button className='hover:cursor-pointer' onClick={handleIdBultoClick}>Cambiar etapa por identificador de bulto </button></li>
   <li><button className='hover:cursor-pointer' onClick={handle1PaqueteClick}>Cambiar etapa de un solo paquete de paquete </button></li>
   <li><button className='hover:cursor-pointer' onClick={handleSubirTablaClick}>Subir datos de tabla </button></li>
   
   <li><button className='hover:cursor-pointer'>Ver resumen </button></li>

    <li><button className='hover:cursor-pointer' onClick={handlePrueba} >Probar Funcion query </button></li>

<li><FormBulto></FormBulto></li>
</ul>



      </div>



    </div>
  )
}

export default AdminPage