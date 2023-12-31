

import Swal from 'sweetalert2'

import 'sweetalert2/src/sweetalert2.scss'

const Update = () => {


   
        const handleAdd = (e) => {
            e.preventDefault();
          
            const form =e.target;
        
            const image =form.Image.value;
            const name=form.Name.value;
            const brand=form.brand.value;
            const price=form.price.value;
            const Category=form.Category.value;
            const Rating=form.Rating.value;
            const updateproduct ={image,name,brand,price,Category,Rating}
         
        
        }
        return (
            <div>
                <div className="flex items-center justify-center  max-w-5xl mx-auto p-6  ">
                    <div className="w-full ">
                        <div className="text-3xl font-semibold text-center  mb-6">
                            Want to Update the Product?
                        </div>
    
                        <div className="bg-[#FCB100]   rounded-lg shadow-xl ">
    
                            <div className="p-8 ">
                                <form onSubmit={handleAdd} className=" " >
    
    
                                    <section className="grid grid-cols-2  gap-5
                                ">
    
    
                                        <div className="mb-6 "><label
    
                                            className="block   text-lg font-semibold mb-2"
                                        >
                                            Image URl
                                        </label>
                                            <input
                                                type="text"
                                                name="Image"
                                            required
                                                className="w-full p-3 borderborder-gray-300 rounded"
                                                placeholder="Type here..."
                                            /></div>
                                        <div className="mb-6"><label
    
                                            className="block   text-lg font-semibold mb-2"
                                        >
                                            Name
                                        </label>
                                            <input
                                                type="text"
                                                name="Name"
                                                required
                                                className="w-full p-3 borderborder-gray-300 rounded"
                                                placeholder="Type here..."
                                            /></div>
                                        <div className="mb-6"><label
    
                                            className="block   text-lg font-semibold mb-2"
                                        >
                                            Brand Name
                                        </label>
                                            <input
                                                type="text"
                                                name="brand"
                                                required
                                                className="w-full p-3 borderborder-gray-300 rounded"
                                                placeholder="Type here..."
                                            /></div>
    
                                        <div className="mb-6"><label
    
                                            className="block   text-lg font-semibold mb-2"
                                        >
                                            Price
                                        </label>
                                            <input
                                                type="text"
                                                name="price"
                                                required
                                                className="w-full p-3 borderborder-gray-300 rounded"
                                                placeholder="Type here..."
                                            /></div>
    
                                        <div className="mb-6"><label
    
                                            className="block   text-lg font-semibold mb-2"
                                        >
                                            Category
                                        </label>
                                            <input
                                                type="text"
                                                name="Category"
                                                required
                                                className="w-full p-3 borderborder-gray-300 rounded"
                                                placeholder="Type here..."
                                            /></div>
    
                                        <div className="mb-6 "><label
    
                                            className="block   text-lg font-semibold mb-2"
                                        >
                                            Rating
                                        </label>
                                        <input
                                                type="text"
                                                name="Rating"
                                                required
                                                className="w-full p-3 borderborder-gray-300 rounded"
                                                placeholder="Type here..."
                                            /></div>
    
                                    </section>
                                    <div className=" flex justify-center mt-6">
                                        <button  className="btn bg-[#FCB100]" type="submit"> Update </button>
                                    </div>
    
    
                                </form>
    
    
                            </div>
    
                        </div>
                    </div>
                </div>
            </div >
        );
    };
    
   

export default Update;