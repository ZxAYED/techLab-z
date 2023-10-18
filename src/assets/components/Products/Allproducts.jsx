import Swal from 'sweetalert2'

const Allproducts = ({product}) => {
    const   {_id,image,description,brand,price,Category,Rating}=product;
    console.log(_id,image,description,brand,price,Category,Rating);
    console.log(product);

const handleDelete=(id)=>{
 
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
         
          fetch(`http://localhost:5001/newproduct/${id}`,{
            method:"DELETE"
          })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount>0){
                    Swal.fire(
                        'Deleted!',
                        'Product has been removed.',
                        'success'
                        
                      )
                }

            }
            )
        }
      })

}

    return (
        <div>
            <h1>hi </h1>
            <div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
    <img className="object-cover w-full h-64" src={image} alt="Article"/>

    <div className="p-6">
        <div>
            <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">Product</span>
            <a href="#" className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" role="link">I Built A Successful Blog In One Year</a>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie parturient et sem ipsum volutpat vel. Natoque sem et aliquam mauris egestas quam volutpat viverra. In pretium nec senectus erat. Et malesuada lobortis.</p>
        </div>

        <div className="mt-4">
            <div className="flex items-center">
                <div className="flex items-center">
                    {/* <img className="object-cover h-10 rounded-full" src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60" alt="Avatar"/> */}
                    
                </div>
                <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">21 SEP 2015</span>
            </div>
            <button onClick={()=>{handleDelete(_id)}}  className="btn btn-danger">Delete</button>
        </div>
    </div>
</div>
        </div>
    );
};

export default Allproducts;