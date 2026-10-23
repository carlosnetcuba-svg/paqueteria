

export type Etapa = {
  label: string
  value: number
}

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


async function parseFile(file: File): Promise<string[]> {

  try{
  const text = await file.text();

  return text
    .replace(/[,;.]/g, " ")      // coma, punto y coma y punto → espacio
    .replace(/\s+/g, " ")        // saltos de línea y espacios múltiples → 1 espacio
    .trim()                      // quita espacio al inicio/fin
    .split(" ")                  // separa por espacio
    .filter(Boolean);            // elimina vacíos (por seguridad)
}catch(e){
  console.log("parseFileError",e)
  return []
}

  }

export default parseFile;
