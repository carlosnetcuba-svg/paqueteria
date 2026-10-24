import { Item, ItemContent, ItemDescription, ItemMedia, ItemTitle } from '@/components/ui/item'
import { DGroupEditor } from '@/Dialogs/DGroupEditor'
import { DPkgEditorEtapa } from '@/Dialogs/DPkgEditorEtapa'
import { PencilSparkles } from 'lucide-react'
import React from 'react'

const Edit = () => {
  return (
       <div className=' p-6 sm:p-10 '>
      <div className='grid gap-3'>

<ul className='flex flex-col gap-3 sm:gap-6'>
      <DGroupEditor></DGroupEditor>

      <DPkgEditorEtapa></DPkgEditorEtapa>
</ul>



      </div></div>
  )
}

export default Edit