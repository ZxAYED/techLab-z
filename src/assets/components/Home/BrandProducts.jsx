import { useContext, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { NewContext } from "./BrandData";
import Addvertise from "./Addvertise";
import Cards from "./Cards/Cards";
import News from "./News";


import { useEffect } from "react";


 
const BrandProducts = () => {
    const { id } = useParams()
   
    const products = useLoaderData()
    

   
    return (
        <div className=" lg:mx-auto max-w-7xl mx-auto mt-10 ">
        <h1 className="text-4xl text-center font-semibold">Tech Superstore - Your Gateway to Cutting-Edge Technology</h1>
        <p className="py-4 text-center text-lg"> Discover a vast array of top-tier technology products at Tech Superstore. From high-performance processors and graphics cards to smartphones, televisions, and more, we have got all your tech needs covered. Explore the latest innovations from leading brands like Intel, AMD, Samsung, Huawei, Xiaomi, and Sony. Upgrade your digital lifestyle with us!</p>

        <div className="flex  gap-4  my-10 ">  
        <div  className="grid grid-cols-1 lg:grid-cols-2 gap-5 flex-1  w-3/4 ">
            {
                products.map(product =>
                    <Cards key={product._id} product={product}
                    ></Cards>
                 
                )
            }
        </div>
                <div className="max-w-xl">
                <Addvertise></Addvertise>
                <News></News>
                </div>
                </div>
        </div>
    );
};

export default BrandProducts;