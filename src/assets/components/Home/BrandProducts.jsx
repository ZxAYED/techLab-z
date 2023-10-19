import { useContext, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { NewContext } from "./BrandData";
import Addvertise from "./Addvertise";


const BrandProducts = () => {
    const { id } = useParams()
    const [Data, setData] = useState()
    const products = useLoaderData()
    console.log(id);
    console.log(products);

    // const product =data.find(item=>item._id==id)
    // console.log(product);
    // setData(product)
    return (
        <div className="max-w-7xl mx-auto">
            
                

                <div className="card bg-base-100 shadow-xl">
                    <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <Addvertise></Addvertise>
        </div>
    );
};

export default BrandProducts;