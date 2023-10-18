import { useContext, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { NewContext } from "./BrandData";


const BrandProducts = ({id}) => {
    const [Data,setData]=useState()
   const idz=useContext(NewContext)
   console.log(idz,id);

// const product =data.find(item=>item._id==id)
// console.log(product);
// setData(product)
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
            <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div></div>
        </div>
    );
};

export default BrandProducts;