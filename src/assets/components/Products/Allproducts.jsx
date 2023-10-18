import { useState } from 'react';
import Swal from 'sweetalert2'


const Allproducts = ({ product }) => {
    const [data,setData]=useState(product)  
    const { _id, image, description, brand, price, Category, Rating } = data;
  


    const handleDelete = (id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5001/newproduct/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Product has been removed.',
                                'success'
                                
                            )
                            setData(data)
                            window.location.reload();
                        }

                    }
                    )
            }
        })

    }

    return (


        <div className="relative h-[70vh] md:h-[500px] mx-10 md:mx-0 overflow-hidden rounded-lg shadow-md bg-[#FCB100]">
            <img className="object-cover h-70 w-full " src={image} alt="Article" />

            <div className="p-6">
                <div>
                    <span className="text-xs font-medium  uppercase  "> {Rating}</span>
                    <a href="#" className="block mt-2 text-2xl font-semibold  transition-colors duration-300 transform text-white  " role="link"> {description}</a>
                    <p className="mt-2 text-sm  hover:underline ">{Category}</p>
                    <div className='flex justify-between items-center gap-4'>
                    <p className="mt-2 text-sm  hover:underline ">{brand}</p>
                    <p className="mt-2 text-sm  hover:underline ">{price}</p>
                    </div>
                </div>




          
            <button  onClick={() => { handleDelete(_id) }} className="btn absolute bottom-2  btn-danger">Delete</button>
        </div>
    </div >

       
    );
};

export default Allproducts;