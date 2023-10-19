import { useState } from "react";

import { useLoaderData  } from "react-router-dom";
import CartProducts from "./CartProducts";


const MyCart = () => {
    const [user, setUser] =useState()
  const users=useLoaderData()
   

    return (
        <div className="grid grid-cols-2 gap-4 max-w-5xl mx-auto ">
 {
users.map(user=><CartProducts user={user} key={user._id}></CartProducts>)
 }
        </div>
    );
};

export default MyCart;