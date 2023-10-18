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
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
      path:'/',
      element:<Home></Home>
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
  <RouterProvider router={router} />
  </React.StrictMode>,
)
