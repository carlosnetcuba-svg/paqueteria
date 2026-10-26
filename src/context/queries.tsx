

import supabasecl from "@/context/supabasecl";



type paqueteI={
  realid:string
  etapa:number
  grupo:string

}



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
//PROBADA FUNCIONA BIEN
ObtenerTodosPaquetesDelGrupo: async (grupo:string)=>{

  console.log("ObtenerTodosPaquetesDelGrupo Ejecutando")
  try{
const { data, error } = await supabasecl
  .from('paquete')
  .select('*, grupo!inner(nombre)')
  .order("etapa")
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



ObtenerTodosPaquetes: async ()=>{

  console.log("ObtenerTodosPaquetes Ejecutando")
  try{
const { data, error } = await supabasecl
  .from('paquete')
  .select('*, grupo!inner(nombre)').order('etapa')
  
   //if(data){console.log("datos resultantes",data)}
   if(error){console.error("ocurrio error",error)}
   return {data,error};
   }
   catch(e){
    console.log(e,"Catch Error" )
    return {error:"Catch Error"}
   }
},


ObtenerTodosGrupos: async ()=>{
  console.log("ObtenerTodosGrupos Ejecutando")
  try{
const { data, error } = await supabasecl.from('grupo').select()
   //if(data){console.log("datos resultantes",data)}
   if(error){console.error("ocurrio error",error)}
   return {data,error};
   }
   catch(e){
    console.log(e,"Catch Error" )
    return {error:"Catch Error"}
   }
},
















//PROBADA FUNCIONA BIEN
ModificarEtapasDelGrupo: async (grupo:string,etapa:number)=>{

  try{
  console.log("Modificando todos los paquetes del grupo Ejecutando")
const { data: paquetes, error: errorLectura } = await supabasecl.from('paquete').select('id, grupo!inner(nombre)').eq('grupo.nombre', grupo)

  console.log("filtrado los paquetes en ese grupo:",paquetes)
if (errorLectura) throw errorLectura

const ids = paquetes.map((paquete) => paquete.id)


if(ids.length==0){return {error:"No se encontraron paquetes"}}
else  {
  const { data, error } = await supabasecl .from('paquete').update({ etapa: etapa }).in('id', ids).select()

  if (error) {throw error}
    return { data, error }

  }
}
  catch(e){
    console.error(e)
     return {error:"Catch Error here"}
  }
    
},


ModificarEtapasDelPaquete: async (paquete:string,etapa:number)=>{

  try{
  console.log("ModificarEtapasDelPaquete Ejecutando")
 const  { data, error } = await supabasecl.from('paquete').update({ etapa:etapa}).eq("realid",paquete).select()
return { data, error }
}
  catch(e){
    console.error(e)
     return {error:"Catch Error here",data:""}
  }
    
},
SubirMultiplesPaquetes: async (paquetes:string[],etapa:number,grupo:string)=>{

  try{
 console.log("SubirMultiplesPaquetes Ejecutando")
    const dataToUpload:paqueteI[]=paquetes.map((p)=>{return{realid:p,etapa:etapa,grupo:grupo} })
 console.log("dataToUpload",dataToUpload)

 
 const  { data, error } = await supabasecl.from('paquete').insert(dataToUpload).select()
  console.log(data,error)
  return { data, error }
}
  catch(e){
    console.error(e)
     return {error:"Catch Error here",data:""}
  }
    
},
CrearUnGrupo:async (grupo:string)=>{

try{
console.log("CrearUnGrupo")
const  { data, error } = await supabasecl.from('grupo').insert({nombre:grupo}).select()
 return  { data, error }
}catch(e){
  console.error(e)
     return {error:"Catch Error here",data:""}
}
 
},

EliminaGrupo:async (grupo:string)=>{

try{
console.log("EliminaGrupo")
const  { data,error } = await supabasecl.from('grupo').delete().eq('nombre', grupo).select()
console.log( data,error)
 return  { data:"", error:"" }
}catch(e){
  console.error(e)
     return {error:"Catch Error here",data:""}
}
 
}
















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



