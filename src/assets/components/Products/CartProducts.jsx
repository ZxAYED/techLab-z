
const CartProducts = ({user}) => {
    console.log(user);
    const {name,image,price,rating,type,description}=user
    return (
        <div>
                       <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1000" className="flex max-w-xl overflow-hidden h-[54vh] rounded-lg shadow-lg bg-[#FCB100] ">
    <div className=" w-1/2  bg-cover" >
        <img className="h-full w-full" src={image} alt={image} />
    </div>

    <div className="w-1/2 p-4 md:p-4">
        <h1 className="text-2xl font-bold text-gray-600 dark:text-white">{name}</h1>
       

        <p className=" pt-3 text-sm text-gray-600 dark:text-gray-400">{description}</p>
        <h1 className="text-lg py-3 font-bold text-gray-600 dark:text-white "> User Rating :{rating}</h1>
        <h1 className="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">Price: {price}$</h1>

        <div className="flex justify-between mt-3 item-center">
           
            <button className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform rounded btn lowerCase bg-[#FCB100] focus:outline-none absolute bottom-3 right-5 ">Buy Now!</button>
        </div>
    </div>
</div>
        </div>
    );
};

export default CartProducts;