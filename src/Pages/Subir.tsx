import React from 'react'
import { AttachmentDescription,AttachmentTitle,AttachmentMedia,
AttachmentContent
} from '../components/ui/attachment'
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field"
import { Button } from '../components/ui/button'
import { Input } from "@/components/ui/input"
import { AdIcon } from 'lucide-react'
import { useRef ,useState} from 'react'
import Paquete from '../components/Paquete'
import parseFile from '@/context/utils'
import { Attachment,AttachmentActions, AttachmentAction} from '../components/ui/attachment'
import { SendIcon } from 'lucide-react'
import { Delete } from 'lucide-react'
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import { DialogSubirNuevos } from '../Dialogs/DSubirNuevos'

const Subir = () => {


  const [pkgProcesados,setpkgProcesados]=useState<string[]>([])
  const [file, setFile] = useState<File | null>(null)
  
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
    setpkgProcesados([])
    // Resetear el input visualmente (opcional, usando una ref)
  }
 
  return (
    <div >
        

{pkgProcesados.length==0?(<div><label 
        htmlFor="file-upload"        
     className="flex w-full h-[50dvh] sm:h-[50vh] cursor-pointer"
        
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
<input hidden id="file-upload" type="file" onChange={handleFileChange}></input></div>):(
  

   <div className="flex flex-col ">
    
    <div className="mx-auto flex w-full max-w-sm flex-col gap-3 py-12">
      <div className='flex flex-row content-center flex-wrap gap-2 
      
       items-center justify-center'>
      <Attachment size="default" >
        
        <AttachmentContent>
          <AttachmentTitle>{file?.name}</AttachmentTitle>
          <AttachmentDescription>{`Total: ${pkgProcesados.length}`}</AttachmentDescription>
        </AttachmentContent>
        <Button  type="button" 
        onClick={handleRemove}
  className="bg-red-300   hover:bg-red-500 text-white  
   py-2 px-3  focus:outline-none focus:ring-2 ">X</Button>
      </Attachment>
     
      <DialogSubirNuevos doneFn={handleRemove} paquetes={pkgProcesados}></DialogSubirNuevos>
     </div>
    </div>

   
  <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(200px,1fr))]">
  
  {pkgProcesados.map((p) => (
    <Paquete nombre={p} labeltext={"Pending"} key={p} />
  ))}
</div></div>)}

        </div>
  )
}

export default Subir