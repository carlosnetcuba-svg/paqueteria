import { Item, ItemContent, ItemDescription, ItemMedia, ItemTitle } from '@/components/ui/item'
import { DGroupEditor } from '@/Dialogs/DGroupEditor'
import { DPkgEditorEtapa } from '@/Dialogs/DPkgEditorEtapa'
import { DGroupCreate } from '@/Dialogs/DGroupCreate'
import { DPkgCreate } from '@/Dialogs/DPkgCreate'
import { DPkgDelete } from '@/Dialogs/DPkgDelete'
import { Link } from 'react-router-dom'
import { DGroupDel } from '@/Dialogs/DGroupDel'
import { FilePlusCorner } from 'lucide-react'


const Edit = () => {
      return (
            <div >
                  <div className='grid gap-3'>

                        <ul className='flex flex-col gap-3 sm:gap-6'>
                              <DGroupCreate></DGroupCreate>

                              <DPkgCreate></DPkgCreate>{/* Crea un paquete*/}
                              <Link to={"/admin/upload"}><CreateLinkToSubirFile></CreateLinkToSubirFile></Link>


                              <DGroupEditor></DGroupEditor>
                              <DPkgEditorEtapa></DPkgEditorEtapa>

                              <DGroupDel></DGroupDel>



                            <DPkgDelete></DPkgDelete>


                        </ul>



                  </div></div>
      )
}

export default Edit


function CreateLinkToSubirFile() {
      return (

            <Item className="hover:bg-gray-300 " variant="outline">
                  <ItemMedia variant="icon">
                        <FilePlusCorner />
                  </ItemMedia>
                  <ItemContent>
                        <ItemTitle>Crea muchos paquetes
                        </ItemTitle>
                        <ItemDescription>
                              Sube un archivo de texto con los paquetes a crear
                        </ItemDescription>
                  </ItemContent>

            </Item>)

}