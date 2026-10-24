import React from 'react'

import { Attachment,AttachmentActions, AttachmentAction,AttachmentDescription,AttachmentTitle,AttachmentMedia,
AttachmentContent
} from './ui/attachment'
import { FileIcon } from 'lucide-react'

export const Trace = () => {
  return (
     <div className="mx-auto flex w-full max-w-sm flex-col gap-3 py-12">
      <Attachment size="default" className="w-full">
        <AttachmentMedia>
          <FileIcon />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>Default attachment</AttachmentTitle>
          <AttachmentDescription>PDF · 2.4 MB</AttachmentDescription>
        </AttachmentContent>
      </Attachment>
     
    </div>
  )
}
