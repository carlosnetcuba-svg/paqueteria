import { createBrowserRouter } from "react-router-dom"
import Routersec from "./rootredirect"

import Dashboard from "./components/dashboard"
import { RLoginForm } from "./components/rlogin-form"
import { Rsignupform } from "./components/rsignup-form"
import ProtectedRoute from "./ProtectedRoute"
import Navbar from "./components/navbar"
import Help from "./components/help"
import AddPet from "./components/addPet"
import Listpets from "./components/listpets"


export const myrouter=createBrowserRouter([

    {path:"/", element:<Routersec></Routersec>},
    {path:"/signin", element:<RLoginForm></RLoginForm>},
    {path:"/signup", element:<Rsignupform></Rsignupform>},
     {
    element: <ProtectedRoute />,      // sin path: es un layout
    children: [
      { path: '/dashboard', element: <Dashboard /> },
  
      { path: '/help',      element: <Help /> },
      { path: '/addpet',     element: <AddPet /> },
      { path: '/listpets',   element: <Listpets /> },
    ],
  },
    


])