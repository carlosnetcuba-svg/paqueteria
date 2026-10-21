

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
},

deletePetbyId: async (id:string)=>{

const {data,error} = await supabasecl
  .from("Pet") .delete().eq('id', id)
    
   if(data){console.log(data)}
   if(error){console.error(error)}
    return {data,error};
}














};



