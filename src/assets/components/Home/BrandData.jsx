import { Children, createContext, useState } from "react";
import { Link } from "react-router-dom";
import BrandProducts from "./BrandProducts";
import 'aos/dist/aos.css'; 
import AOS from 'aos';
import { useEffect } from "react";
export const NewContext =createContext()
const BrandData = ({id,image,children}) => {
    const[data ,setData]=useState(id)
    useEffect(()=>{
       
      AOS.init();
    
        },[])
    const handleId=id=>{
        setData(id)
       }
    return (
        <div data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000">
             < Link onClick={()=>handleId(id)} to={`/brandProducts/${id}`}>
             <div className=''>
              <div className="overflow-hidden">
                <div className="  text-white bg-center transition-transform  scale-100 hover:scale-110  duration-700 " >
                  <img className='h-32 w-36  hover:[rounded-xl ,shadow-xl ] rounded-[50%]  object-fit' src={image} alt="" />


                </div>
              </div>
              <p className='z-10 font-semibold text-center text-2xl p-6'>{data}</p>
             
              
            </div>
            </Link>
           

        </div>
        
    );
};

export default BrandData;