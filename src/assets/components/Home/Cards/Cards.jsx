import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Cards = ({product}) => {
    const {brandName,image,name,price,rating,type} =product

    const [user,setUser]=useState()
    useEffect(()=>{
       
        AOS.init();
      
          },[])
      
          const handleGo=(name)=>{
            setUser(name)
          }
       const   handleUp=(name)=>{}
    return (
        <div>
        <div data-aos="fade-right" className="relative h-[70vh] md:h-[500px] mx-10 md:mx-0 overflow-hidden rounded-lg shadow-md bg-[#FCB100] ">
        <img className="object-cover h-60 w-full " src={image} alt="Article" /> 

        <div className="p-6 ">
            <div>
              
                <p className="">  Brand: <span className="font-medium text-white "> { brandName}</span> </p>
                <a href="#" className="block mt-2 text-2xl font-semibold  transition-colors duration-300 transform text-white  " role="link"> {name}</a>
                <p className="mt-2 text-sm  ">Category : <span className="font-medium  hover:underline text-purple-600 "> { type}</span> </p>
                <div className='flex justify-between items-center gap-4'>
                <p className="mt-2 text-sm    "> Price : {price } $</p>
                <p className="mt-2 text-sm   ">  Avarage Rating: <span className="font-medium  hover:underline text-purple-600 "> {rating}  </span>  </p>
                </div>
            </div>




      <div className="flex justify-between">
        <Link to={`/details/${name}`}> <button  onClick={()=>handleGo(name)} className="btn absolute bottom-2  right-5 btn-danger">Details</button></Link>
       <Link to={`/update/${name}`}><button onClick={()=>handleUp(name)} className="btn absolute bottom-2 left-2 btn-danger">Update</button></Link>
        </div>
    </div>
    </div>
</div >
    );
};

export default Cards;