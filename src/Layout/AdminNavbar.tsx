import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useGlobal } from '@/context/context'

const Navbar = () => {

  const [openMenu,setOpenMenu]=useState(false)

   

    function handleMenuClick(){
      console.log("handleMenuClick")
      setOpenMenu((prev)=>{return !prev})
    }
    function closeMenu(){setOpenMenu(false)}

  const{cerrarsession}=useGlobal()
  const navigate=useNavigate()

  async function handleCerrarSession() {

  console.log(" handleCerrarSession")

    try{
      const {error} = await cerrarsession()
      if(error){console.log("Ha ocurrido un error al cerrar la session")}
      else{
        console.log('navigate("/signin")')
        navigate("/signin")
      }

    }
    catch(e){
      console.log(e)
    }
    
   





  }


  return (

<div className="bg-gray-900 text-white">
  {/* Desktop */}
  <div className="hidden md:flex items-center justify-between p-4">
    <h1 className="text-2xl font-bold">LOGO</h1>
    <ul className="flex gap-6 text-lg">
      <li><Link to="/admin/dash">Dashboard</Link></li>
      <li><Link to="/admin/upload">Subir</Link></li>
      <li><Link to="/admin">Editar</Link></li>
      <li onClick={handleCerrarSession} className="cursor-pointer hover:text-gray-300">SignOut</li>
    </ul>
  </div>

  {/* Móvil */}
  <div className="md:hidden flex items-center justify-between p-4">
    <h1 className="text-xl font-bold">LOGO</h1>
    <button className="text-2xl" onClick={handleMenuClick}>☰</button>
  </div>
  {openMenu? <ul className="md:hidden flex flex-col gap-2 px-4 pb-4">
    <li><Link onClick={closeMenu} to="/admin/dash">Dashboard</Link></li>
    <li><Link onClick={closeMenu} to="/admin/upload">Subir</Link></li>
    <li><Link onClick={closeMenu} to="/admin">Editar</Link></li>
    <li onClick={() => { handleCerrarSession(); closeMenu() }} className="cursor-pointer">SignOut</li>
  </ul>:
<></>}
 

</div>





    /*
    <div className='text-2xl flex justify-between p-4 bg-amber-500 mb-5 '>
        <div><h1 >LOGO</h1></div>
        <div>
            <ul className='flex justify-center gap-2'>
                <li><Link to={"/admin/dash"}><h1>Dash</h1></Link></li>
                 <li><Link to={"/admin/upload"}><h1>Subir</h1></Link></li>
                 <li><Link to={"/admin"}><h1>Editar</h1></Link></li>
                 <li><h1 onClick={handleCerrarSession} className=' hover:cursor-pointer'>SignOut</h1></li>
            </ul>
        </div>


    </div>
    */
  )
}

export default Navbar