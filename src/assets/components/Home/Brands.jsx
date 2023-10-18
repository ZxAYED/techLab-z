import { useState } from "react";
import { Link} from "react-router-dom";
import BrandData from "./BrandData";


const Brands = ({brand}) => {
    const {id,image}=brand;
   
 
   
    return (
        <div>
             <div className=''>
         
           <BrandData  image={image} id={id} ></BrandData>
          
        </div>
        </div>
    );
};

export default Brands;