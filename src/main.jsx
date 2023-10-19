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
import AuthProvider, { AuthContext } from './assets/components/Authentication/AuthProvider';
import PrivateRoute from './assets/components/Authentication/PrivateRoute';
import Details from './assets/components/Home/Cards/Details';
import Update from './assets/components/Products/Update';
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
      element:<PrivateRoute><AddPRoducts/></PrivateRoute>
    },
      {
      path:'/MyCart',
      element:<PrivateRoute><MyCart/></PrivateRoute> ,
      loader:({params})=>{ return fetch(`http://localhost:5001/update/${params.id}`)
    },
      {
      path:'/Login',
      element:<Login/>
   
    },{
      path:'/details/:id',
      element:<Details/>,
      loader:({params})=>{ return fetch(`http://localhost:5001/details/${params.id}`)
    },
     } ,{
      path:'/SignUp',
      element:<SignUp/>
    },
    {
      path:'/update/:id',
      element:<PrivateRoute><Update/></PrivateRoute>,
      loader:({params})=>{ return fetch(`http://localhost:5001/details/${params.id}`)
    }
    },
      { 
      path:'/brandProducts/:id',
      element:<BrandProducts/>,
      loader:({params})=>{return fetch(`http://localhost:5001/brandProducts/${params.id}`)}
      
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
    <AuthProvider>
  <RouterProvider router={router} />
  </AuthProvider>
  </React.StrictMode>,
)
