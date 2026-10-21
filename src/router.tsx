import { createBrowserRouter } from "react-router-dom"
import Routersec from "./rootredirect"
import { Trace } from "./components/Trace"
import { LoginForm } from "./components/login-form"
import { SignIn } from "./components/SignIn"
import AdminPage from "./components/AdminPage"




export const myrouter=createBrowserRouter([

    {path:"/", element:<Trace></Trace>},
    {path:"/signin", element:<SignIn></SignIn>},
     {path:"/admin", element:<AdminPage></AdminPage>},
    {path:"/trace", element:<></>},
     
    


])