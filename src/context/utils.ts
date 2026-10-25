
export type PaqueteI = {
  id: number
  etapa: Etapa
  realid:string
  grupo:string
}
export type Etapa = {
  label: string
  value: number
}

export const EtapaToLabel=(n:number)=>{return etapas.find((e) => e.value === n)?.label ?? String(n);}

export const  etapas :Etapa[] = [

  { label: "Almacen Miami", value:  10},
  { label: "Montaje en Contenedor", value: 20 },
  { label: "Contenedor en puerto de miami", value: 30 },
  { label: "Contenedor en Mariel Habana", value: 40 },
  { label: "Procesamieno de Aduana en Cuba", value: 50 },
  { label: "Almacen Central en Cuba", value: 60 },
  { label: "Reparticion ", value: 70 },
  { label: "Entrega ", value: 80 },
  { label: "Borrar de la nube", value: 500 },
]



//Lee todas las palabras en un archivos y devuelve un arreglo de estas sin repetir ninguna
async function parseFile(file: File): Promise<string[]> {

  try{
  const text = await file.text();

  const todos= text
    .replace(/[,;.-]/g, " ")      // coma, punto y coma y punto → espacio
    .replace(/\s+/g, " ")        // saltos de línea y espacios múltiples → 1 espacio
    .trim()                      // quita espacio al inicio/fin
    .split(" ")                  // separa por espacio
    .filter(Boolean);            // elimina vacíos (por seguridad)

    const unicos = Array.from(new Set(todos));
    return unicos;

}catch(e){
  console.log("parseFileError",e)
  return []
}

  }


export default parseFile;


