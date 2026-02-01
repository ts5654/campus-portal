import React from 'react'
import {Home} from "./pages/Home"
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import { Attendence } from './pages/Attendence'
import { Event } from './pages/Event'
import { Faculties } from './pages/Faculties'
import { Applayout } from './Layout/Applayout'
import { Notes } from './pages/Notes'
import {Sign} from "./pages/Sign-in"
const App = () => {
    const router = createBrowserRouter([
      {
        path:"/",
        element:<Applayout></Applayout>,
        children:[
          {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/attendence",
        element:<Attendence/>
      },
      {
        path:"/event",
        element:<Event/>
      },
      {
        path:"/faculties",
        element:<Faculties/>
      },
      {
        path:"/notes",
        element:<Notes/>
      },
      {
        path:"/login",
        element:<Sign></Sign>
      },
     
        ]
      }
      
    ])
    return <RouterProvider router={router}/>
}

export default App