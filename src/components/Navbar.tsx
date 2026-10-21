import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useGlobal } from '@/context/context'

const Navbar = () => {

   
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
    <div className='text-2xl flex justify-between p-4 bg-amber-500 mb-5 '>
        <div><h1 >LOGO</h1></div>
        <div>
            <ul className='flex justify-center gap-3'>
                <li><Link to={"/admin"}><h1>Board</h1></Link></li>
                 <li><h1 onClick={handleCerrarSession} className=' hover:cursor-pointer'>SignOut</h1></li>
            </ul>
        </div>


    </div>
  )
}

export default Navbar