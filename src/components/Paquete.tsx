import React from 'react'

const Paquete = ({nombre}:{nombre:string}) => {
    console.log("paquete",nombre)
  return (
    <div className='px-4 sm:px-2 border-gray-200 border-2  text-2xl '>
        {nombre}</div>
  )
}

export default Paquete