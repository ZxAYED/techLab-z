import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './assets/components/Root/Root.jsx';
import ErrorPage from './assets/components/ErrorPage/ErrorPage';
import Home from './assets/components/Home/Home';
import AddPRoducts from './assets/components/Products/AddPRoducts';
import MyCart from './assets/components/Products/MyCart';
import Login from './assets/components/Authentication/Login';
import NewProducts from './assets/components/Products/NewProducts';
import SignUp from './assets/components/Authentication/SignUp';
import BrandProducts from './assets/components/Home/BrandProducts';
import BrandData from './assets/components/Home/BrandData';
import { AuthContext } from './assets/components/Authentication/AuthProvider';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
      path:'/',
      element:<Home></Home>,
      loader:()=>{ return fetch('http://localhost:5001/brandProducts')}
    },
      {
      path:'/AddProducts',
      element:<AddPRoducts/>
    },
      {
      path:'/MyCart',
      element:<MyCart/>
    },
      {
      path:'/Login',
      element:<Login/>
    },
      {
      path:'/SignUp',
      element:<SignUp/>
    },
      {
      path:'/brandProducts/:id',
      element:<BrandData><BrandProducts/></BrandData>,
      // loader:({params})=>{
      //  return fetch()
      // }
     
    },
      {
      path:'/NewProducts',
      element:<NewProducts/>,
      loader:()=>{
       return fetch('http://localhost:5001/newproduct')
      }
    },
  ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContext.Provider>
  <RouterProvider router={router} />
  </AuthContext.Provider>
  </React.StrictMode>,
)
