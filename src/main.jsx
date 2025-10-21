import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom' 
import Mainlayout from './layout/Mainlayout.jsx'
import Home from './Pages/Home.jsx'
import Service from './Pages/Service.jsx'
import MyProfile from './Pages/MyProfile.jsx'



const router=createBrowserRouter(
  [
    {
      path:'/' ,
      element:<Mainlayout></Mainlayout> ,
      children:[
        {
          index:true,
          element:<Home></Home>
        } ,
        {
          path:'/Service',
          element:<Service></Service>
        } ,
        {
          path:'/my-profile',
          element:<MyProfile></MyProfile>
        }
      ]
    } 
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
