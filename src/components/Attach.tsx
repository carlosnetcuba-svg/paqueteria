import React from 'react'
import {
  Attachment,
  AttachmentContent,
  AttachmentDescription,
  AttachmentMedia,
  AttachmentTitle,AttachmentAction
  
} from "@/components/ui/attachment"
import { Input } from '@/components/ui/input'
import { FileTextIcon } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
const Attach = () => {



  const [file, setFile] = useState<File | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)

  // 1. Manejar la selección del archivo
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile && selectedFile.type === "text/plain") {
      setFile(selectedFile)
    } else {
      // TODO AGREGAR EL TOAST
    
    }
  }

  // 2. Eliminar el archivo
  const handleRemove = () => {
    setFile(null)
    // Resetear el input visualmente (opcional, usando una ref)
  }

  // 3. Procesar y enviar
  const handleUpload = async () => {
    if (!file) return
    setIsProcessing(true)
    try {
      // Leer el archivo
      const text = await file.text()
      
      // Convertir a datos (ejemplo: array de líneas)
      const datosProcesados = text.split("\n").map(linea => linea.trim()).filter(Boolean)
      
      console.log("Datos listos para servidor:", datosProcesados)
      // TODO: Enviar `datosProcesados` a tu Server Action o API
      
      // Aquí lanzarías tu toast de éxito
      // toast({ title: "Éxito", description: "Archivo procesado y enviado" })
      
    } catch (error) {
      // Aquí lanzarías tu toast de error
    } finally {
      setIsProcessing(false)
      setFile(null) // Limpiar tras enviar
    }
  }





  return (
    <div> 

<div className='flex flex-col justify-start gap-4'>


<Button  size="sm" className="w-auto bg-black text-white rounded-2xl p-2 wra" onClick={handleUpload}>TEST READ THE ARCHIVE</Button>
<Button  size="sm" className="w-auto bg-black text-white rounded-2xl p-2" onClick={handleRemove}>TEST REMOVE THE ARCHIVE</Button>
</div>
  <Input 
        type="file" 
        accept=".txt" 
        onChange={handleFileChange} 
        disabled={isProcessing}
      />

{file? <div className="mx-auto flex w-full max-w-sm flex-col gap-3 py-12">
      <Attachment size="default" className="w-full">
        <AttachmentMedia>
          <FileTextIcon />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>Archivo</AttachmentTitle>
          <AttachmentDescription>Formato y tamano </AttachmentDescription>
        </AttachmentContent>
        <AttachmentAction onClick={handleRemove} disabled={isProcessing}></AttachmentAction>
      </Attachment>
     
      
    </div>:<p>....</p>}

</div>

  )
}

export default Attach