

import supabasecl from "@/context/supabasecl";



type paqueteI={
  realid:string
  etapa:number
  grupo:string

}



export const  Supabasequeries={
   
CrearPaquete: async (name:string,grupo:string,etapa:number)=>{

const {data,error} = await supabasecl
  .from("paquete") .insert({ realid: name, grupo: grupo, etapa: etapa }).select()
    console.log(data)
    console.log(error)
    return {data,error}
},


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


ObtenerEtapadePaquete: async (realid:string)=>{

  console.log("ObtenerEtapadePaquete Ejecutando")
  try{
const { data, error } = await supabasecl .from('paquete').select('etapa').order('etapa',{ascending:false}).eq('realid', realid).limit(1).select()
   if(data){console.log("datos resultantes",data)}
   if(error){console.error("ocurrio error",error)}

   return {data,error};
   }
   catch(e){
    console.log(e,"Catch Error" )
    return {data: undefined, error:"Catch Error"}
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



