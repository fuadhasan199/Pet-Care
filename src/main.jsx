import { StrictMode } from 'react'
 import { createRoot } from 'react-dom/client' 
 import React from 'react';
import ReactDOM from 'react-dom/client';
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
import PrivateRoute from './Routes/PrivateRoute.jsx'
import Error from './Pages/Error.jsx'
import ServiceProvider from './Provaider/ServiceProvider.jsx'



const router=createBrowserRouter(
  [
    {
      path:'/' ,
      element:<Mainlayout></Mainlayout> ,
       errorElement:<Error></Error>,
      children:[
        {
          index:true,
          element:<Home></Home>,
          loader:()=>fetch('/Data.json'),
        } ,
        {
           path:'/service',
             element:(
           <PrivateRoute> 
          <Service></Service>
            </PrivateRoute>  ),
                               
             loader:()=>fetch('/Data.json'), 
             
                 },

        {
          path:'/my-profile',
          element:<PrivateRoute> <MyProfile></MyProfile> </PrivateRoute>
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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider> 
      <ServiceProvider> 
        <RouterProvider router={router} />
      </ServiceProvider>
    </AuthProvider>
  </React.StrictMode>
);