import { createBrowserRouter } from "react-router-dom"
import Routersec from "./rootredirect"
import { Trace } from "./components/Trace"
import { LoginForm } from "./components/login-form"




export const myrouter=createBrowserRouter([

    {path:"/", element:<Trace></Trace>},
    {path:"/signin", element:<LoginForm></LoginForm>},
    {path:"/trace", element:<></>},
     
    


])