import React from 'react'
import {
  Item,
  ItemContent,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import { Spinner } from './ui/spinner'
const Cargando = () => {
  return (
   <div className="flex w-full max-w-xs flex-col gap-4 [--radius:1rem]">
      <Item variant="muted">
        <ItemMedia>
          <Spinner />
        </ItemMedia>
        <ItemContent>
          <ItemTitle className="line-clamp-1">Cargando elementos...</ItemTitle>
        </ItemContent>
        
      </Item>
    </div>
  )
}

export default Cargando