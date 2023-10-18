import { Children, createContext, useState } from "react";
import { Link } from "react-router-dom";
import BrandProducts from "./BrandProducts";

export const NewContext =createContext()
const BrandData = ({id,image,children}) => {
    const[data ,setData]=useState(id)
    
    const handleId=id=>{
        setData(id)
       }
    return (
        <div>
             < Link onClick={()=>handleId(id)} to={`/brandProducts/${id}`}>
             <div className=''>
              <div className="overflow-hidden">
                <div className="  text-white bg-center transition-transform  scale-100 hover:scale-105  duration-700 " >
                  <img className='h-32 w-36   hover:[rounded-xl] rounded-[50%]  object-fit' src={image} alt="" />


                </div>
              </div>
              <p className='z-10 font-semibold text-center text-2xl p-6'>{data}</p>
             
              
            </div>
            </Link>
            <NewContext.Provider value={id}>
                {children}
            </NewContext.Provider>

        </div>
        
    );
};

export default BrandData;