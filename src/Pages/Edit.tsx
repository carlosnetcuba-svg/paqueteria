import { Item, ItemContent, ItemDescription, ItemMedia, ItemTitle } from '@/components/ui/item'
import { DGroupEditor } from '@/Dialogs/DGroupEditor'
import { DPkgEditorEtapa } from '@/Dialogs/DPkgEditorEtapa'
import { DGroupCreate } from '@/Dialogs/DGroupCreate'
import { PencilSparkles } from 'lucide-react'
import React from 'react'
import { DGroupDel } from '@/Dialogs/DGroupDel'

const Edit = () => {
  return (
       <div >
      <div className='grid gap-3'>

<ul className='flex flex-col gap-3 sm:gap-6'>
      <DGroupEditor></DGroupEditor>

      <DPkgEditorEtapa></DPkgEditorEtapa>
      <DGroupCreate></DGroupCreate>
      <DGroupDel></DGroupDel>

      
</ul>



      </div></div>
  )
}

export default Edit