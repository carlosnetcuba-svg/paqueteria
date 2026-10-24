import { createBrowserRouter } from "react-router-dom"

import { Trace } from "./components/Trace"

import { SignIn } from "./components/SignIn"

import Edit from "./Pages/Edit"
import AdminLayout from "./Layout/AdminLayout"
import Subir from "./Pages/Subir"






export const myrouter=createBrowserRouter([

    {path:"/", element:<Trace></Trace>},
    {path:"/signin", element:<SignIn></SignIn>},
    {
    path: "/admin",
    element: <AdminLayout />,      // 👈 el layout (navbar + Outlet)
    children: [
      { index: true, element: <Edit /> },   // /admin
      { path: "upload", element: <Subir /> },     // /admin/users
      { path: "dash", element: <Edit /> } // /admin/settings
    ],
  },
    {path:"/trace", element:<></>},
     
    


])