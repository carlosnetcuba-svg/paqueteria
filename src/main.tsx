import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'

import { GlobalContextProvider } from './context/context.tsx'
import { myrouter } from './router.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalContextProvider>
     <RouterProvider router={myrouter}></RouterProvider>
    </GlobalContextProvider>
  </StrictMode>,
)
