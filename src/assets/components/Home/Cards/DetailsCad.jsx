import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const DetailsCad = ({items}) => {
    
    const {brandName,image,name,price,rating,type,description,features} =items
 const handleGo=(items)=>{
  
     
            fetch('http://localhost:5001/MyCart',{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(items)
            }  )
            .then(res=>res.json())
            .then(data=>{Swal.fire({
                title: 'Item added !',
                text: 'Successfully!',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
            .catch(err=>{
                 Swal.fire({
                title: 'Error!',
                text: err.message,
                icon: 'error',
                confirmButtonText: 'Cool'
                 })})})
 }
    
    return (
        <div>
             <div>
        <div data-aos="fade-right" className="relative   mx-10 md:mx-0 overflow-hidden rounded-lg shadow-md bg-[#FCB100] ">
        <img className="object-fit h-[80vh] w-full " src={image} alt="Article" /> 

        <div className="p-6 ">
            <div>
              
                <p className=" text-white text-lg">  Brand : <span className="font-medium text-purple-600  ">  {brandName}</span> </p>
                <a href="#" className="block mt-2 text-3xl font-semibold  transition-colors duration-300 transform text-white  " role="link"> {name}</a>
                <a href="#" className="block mt-2 text-xl font-semibold  transition-colors duration-300 transform  text-purple-600   " role="link"> <span className="text-white">{description}</span> </a>
                <a href="#" className="block mt-2 text-xl  transition-colors duration-300 transform text-purple-600  " role="link">Features : <span className="text-white  ">{features}</span>
                </a>
                <p className="mt-2 text-sm  ">Category : <span className="font-medium  hover:underline text-purple-600 "> { type}</span> </p>
                <div className='flex justify-between items-center gap-4'>
                <p className="mt-2 text-sm    "> Price : {price } $</p>
                <p className="mt-2 text-sm   ">  Avarage Rating: <span className="font-medium  hover:underline text-purple-600 "> {rating}  </span>  </p>
               
                </div>
                
            </div>
           
            </div>
            <div className="mb-10 flex justify-center items-center w-1/4 mx-auto  ">
             <button   onClick={()=>handleGo(items)} className="btn w-full lowerCase bg-[#FCB100]">Add to Cart</button></div>
            </div>

            
            </div>

        </div>
    );
};

export default DetailsCad;