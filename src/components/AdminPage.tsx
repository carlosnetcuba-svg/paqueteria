import React, { useState } from 'react'
import Navbar from './AdminNavbar'
import { DialogGroupEditor } from './DialogGroupEditor'
import { DialogPkgEditorEtapa } from './DialogPkgEditorEtapa'
import { PencilSparkles } from "lucide-react"

import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"

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

    
        
      <div className='grid gap-3'>











<ul>
     <Item variant="outline">
        <ItemMedia variant="icon">
      <PencilSparkles />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Editar por grupo</ItemTitle>
          <ItemDescription>
        <DialogGroupEditor></DialogGroupEditor>
          </ItemDescription>
        </ItemContent>
      </Item>
       <Item variant="outline">
        <ItemMedia variant="icon">
      <PencilSparkles />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Editar por paquete</ItemTitle>
          <ItemDescription>
        <DialogPkgEditorEtapa></DialogPkgEditorEtapa>
          </ItemDescription>
        </ItemContent>
      </Item>
       <Item variant="outline">
        <ItemMedia variant="icon">
      <PencilSparkles />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Editar por grupo</ItemTitle>
          <ItemDescription>
        <DialogGroupEditor></DialogGroupEditor>
          </ItemDescription>
        </ItemContent>
      </Item>
  <li><button className='hover:cursor-pointer' onClick={handleIdBultoClick}>Cambiar etapa por identificador de bulto </button></li>
   <li><button className='hover:cursor-pointer' onClick={handle1PaqueteClick}>Cambiar etapa de un solo paquete de paquete </button></li>
   <li><button className='hover:cursor-pointer' onClick={handleSubirTablaClick}>Subir datos de tabla </button></li>
   
   <li><button className='hover:cursor-pointer'>Ver resumen </button></li>

    <li><button className='hover:cursor-pointer' onClick={handlePrueba} >Probar Funcion query </button></li>

<li></li>
</ul>



      </div>



    </div>
  )
}

export default AdminPage