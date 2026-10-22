import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'

import { GlobalContextProvider } from './context/context.tsx'
import { myrouter } from './router.tsx'
import { Toaster } from './components/ui/toast.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalContextProvider>
     <RouterProvider router={myrouter}></RouterProvider>
    </GlobalContextProvider>
  <Toaster></Toaster>
  </StrictMode>,
)
//TODO NO PERMITIR EN LA BASE DE DATOS POLICI CREAR USUARIO SIGN UP