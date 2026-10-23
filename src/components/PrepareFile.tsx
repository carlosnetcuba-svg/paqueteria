import React from 'react'
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field"
import { Button } from './ui/button'
import { Input } from "@/components/ui/input"
import { AdIcon } from 'lucide-react'
import { useRef ,useState} from 'react'
import Paquete from './paquete'
import parseFile from '@/context/utils'
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"

const PrepareFile = () => {

const [dragging, setDragging] = useState(false);
  const [pkgProcesados,setpkgProcesados]=useState<string[]>([])
  const [file, setFile] = useState<File | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
   const ref = useRef();

  // 1. Manejar la selección del archivo
  const handleFileChange = async(e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile && selectedFile.type === "text/plain") {
      setFile(selectedFile)
     const procesados:string[] = await parseFile(selectedFile)
    if (procesados.length>0){
      setpkgProcesados(procesados)
    }
    } else {
      // TODO AGREGAR EL TOAST
    
    }
  }

  // 2. Eliminar el archivo
  const handleRemove = () => {
    setFile(null)
    // Resetear el input visualmente (opcional, usando una ref)
  }
 
  return (
    <div className=' p-4 sm:p-10 '>
        

{pkgProcesados.length?(<div><label 
        htmlFor="file-upload"        
        className="flex w-full h-dvh sm:h-screen cursor-pointer "
        
        >
    <Empty className="border border-dashed border-gray-600">
  <EmptyHeader>

    <EmptyTitle>Subir archivo</EmptyTitle>
    <EmptyDescription>Carga un archivo para crear nuevos paquetes</EmptyDescription>
  </EmptyHeader>
<EmptyContent>
  
  <span className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white">
    Subir
  </span>
</EmptyContent>
</Empty>
</label>
<input hidden id="file-upload" type="file" onChange={handleFileChange}></input></div>):(<div className="flex flex-col gap-3 mt-5">
  {pkgProcesados.map((p) => (
    <Paquete nombre={p} key={p} />
  ))}
</div>)}

        </div>
  )
}

export default PrepareFile