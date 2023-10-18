import { useLoaderData } from "react-router-dom";
import Allproducts from "./Allproducts";


const NewProducts = () => {
    const products =useLoaderData()

    return (
        <div>
            <h1 className="text-3xl  text-center">Total Products : {products.length}</h1>
            <div>
                {
                    products.map(product =>{
                        <Allproducts  product={product} ></Allproducts>
                     ;
                    })
                }
            </div>
        </div>
    );
};

export default NewProducts;