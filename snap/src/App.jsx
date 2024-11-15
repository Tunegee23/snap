import {RouterProvider, createBrowserRouter  } from  "react-router-dom"
import Homepage from "./Pages/Homepage"
import Login from "./Pages/Login"
import Register from "./Pages/Register"

const App = () => {
  
    const router = createBrowserRouter([
        {
           path : "/",
           Component: Homepage
        },

        {
            path: "/login",
            Component: Login
        },

        {
            path: "/Register",
            Component: Register
        }
        
    ])
    return(
        <div>
             <RouterProvider router={router}/>
        </div>
    )
}


 

export default App;


