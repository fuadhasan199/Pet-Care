import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom' 
import Mainlayout from './layout/Mainlayout.jsx'
import Home from './Pages/Home.jsx'
import Service from './Pages/Service.jsx'
import MyProfile from './Pages/MyProfile.jsx'
import AuthProvider from './Provaider/AuthProvider.jsx'
import Login from './Pages/Login.jsx'
import SignUp from './Pages/SignUp.jsx'



const router=createBrowserRouter(
  [
    {
      path:'/' ,
      element:<Mainlayout></Mainlayout> ,
      children:[
        {
          index:true,
          element:<Home></Home>,
          loader:()=>fetch('/Data.json'),
        } ,
        {
          path:'/Service',
          element:<Service></Service>
        } ,
        {
          path:'/my-profile',
          element:<MyProfile></MyProfile>
        } ,
        {
          path:'/login',
          element:<Login></Login> 
        } ,
        {
          path:'/SignUp',
          element:<SignUp></SignUp>
        }

      ]
    } 
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode> 
    <AuthProvider> 
         <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
   
  </StrictMode>,
)
