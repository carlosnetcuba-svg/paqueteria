import { createBrowserRouter } from "react-router-dom"

import { Trace } from "./components/Trace"

import { SignIn } from "./components/SignIn"

import Edit from "./Pages/Edit"
import AdminLayout from "./Layout/AdminLayout"
import Subir from "./Pages/Subir"
import Dash from "./Pages/Dash"
import { PageCliente } from "./Pages/PageCliente"





export const myrouter=createBrowserRouter([

    {path:"/", element:<PageCliente></PageCliente>},
    {path:"/signin", element:<SignIn></SignIn>},
    {
    path: "/admin",
    element: <AdminLayout />,      // 👈 el layout (navbar + Outlet)
    children: [
      { index: true, element: <Edit /> },   // /admin
      { path: "upload", element: <Subir /> },     // /admin/users
      { path: "dash", element: <Dash /> } // /admin/settings
    ],
  },
    {path:"/trace", element:<></>},
     
    


])