
import { useLoaderData, useParams } from "react-router-dom";
import DetailsCad from "./DetailsCad";


const Details = () => {

   const item =useParams()
   const data =useLoaderData()
 
    return (
        <div>
             <div  className="gap-5 flex-1  max-w-7xl mx-auto " >
            {
                data?.map(items=> <DetailsCad items={items} key={items._id}></DetailsCad>)
            }
           </div>
           
        </div>
    );
};

export default Details;