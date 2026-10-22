

import supabasecl from "@/context/supabasecl";






export const  Supabasequeries={
   
addPet: async (name:string,age:number,weight:number)=>{

const {data,error} = await supabasecl
  .from("Pet") .insert({ name: name, age: age, weight: weight })
  .select()
    console.log(data)
    console.log(error)
    return {data,error}
},
getPets: async (fromPage:number)=>{

const {data,error} = await supabasecl
  .from("Pet") .select()
    
   if(data){console.log(data)}
   if(error){console.error(error)}
    return data;
}
,

ObtenerTodosPaquetesDelGrupo: async (grupo:string)=>{

  console.log("ObtenerTodosPaquetesDelGrupo Ejecutando")
  try{
const { data, error } = await supabasecl
  .from('paquete')
  .select('*, grupo!inner(nombre)')
  .eq('grupo.nombre', grupo)
   if(data){console.log("datos resultantes",data)}
   if(error){console.error("ocurrio error",error)}
   return {data,error};
   }
   catch(e){
    console.log(e,"Catch Error" )
    return {error:"Catch Error"}
   }
  
    
},

ModificarEtapasDelGrupo: async (grupo:string,etapa:number)=>{

  try{
  console.log("Modificando todos los paquetes del grupo Ejecutando")
const { data: paquetes, error: errorLectura } = await supabasecl
  .from('paquete').select('id, grupo!inner(nombre)').eq('grupo.nombre', grupo)

  console.log("filtrado los paquetes en ese grupo:",paquetes)
if (errorLectura) throw errorLectura

const ids = paquetes.map((paquete) => paquete.id)

if (ids.length > 0) {
  const { data, error } = await supabasecl
    .from('paquete').update({ etapa: etapa }).in('id', ids).select()

  if (error) throw error
  else{
    return { data, error }
  }
  }
}
  catch(e){
    console.error(e)
     return {error:"Catch Error"}
  }
    
},



















};

/**  const { data, error } = await supabasecl
  .from('grupo')
  .select(`
    nombre,
    paquete (
      id,
      real_id,
      campo2
    )
  `)
  .eq('nombre', 'grupo01') */



