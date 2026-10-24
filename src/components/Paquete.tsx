import React from 'react'
import "./Paquete.css"
const Paquete = ({nombre,labeltext}:{nombre:string,labeltext:string}) => {
    console.log("paquete",nombre)

  return (
   <div className="pkg_card">
  <div className="pkg_label ">{labeltext}</div>
  <span className="pkg_span">{nombre}</span>
  
</div>
  )
}

export default Paquete