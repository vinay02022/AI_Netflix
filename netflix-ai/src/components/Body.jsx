import React from 'react'
import Login from './Login'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Browse from './Browse'
import Header from './Header'

const Body = () => {
    //create krege ek object mein saare routes and will than share/provide these routers using routerProvider
    const appRouter=createBrowserRouter([
        {
            path:'/',
            element:<Login/>
        },
        {
            path:'/browse',
            element:<Browse/>
        },
        {
            path:'/login',
            element:<Login/>
        }

    ])
  return (
    <div>
      {/* <Login/>
      <Browse/> */}
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body
