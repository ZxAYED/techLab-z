import { useLoaderData } from "react-router-dom";
import Allproducts from "./Allproducts";


const NewProducts = () => {
    const products =useLoaderData()

    return (
        <div className="mx-10 lg:mx-auto ">
            <h1 className="text-4xl text-center font-semibold">Total Added Products : {products.length}</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 max-w-7xl mx-auto gap-5 mt-10">
                {
                    products.map(product =>
                        <Allproducts  product={product} key={product._id} >

                        </Allproducts>
                     
                    )
                }
            </div>
        </div>
    );
};

export default NewProducts;