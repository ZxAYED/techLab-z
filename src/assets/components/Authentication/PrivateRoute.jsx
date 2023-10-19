import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const PrivateRoute = ({children}) => {
    const location =useLocation()
    const {loading,user} =useContext(AuthContext)
    console.log(user);
    if(loading) {
        return <span className="loading loading-spinner text-secondary"></span>
    }
    else if(user){
      return  children
    }else
    return <Navigate state={location.pathname} to='/Login'> </Navigate>


  
};

export default PrivateRoute;