import Brands from "./Brands";

const Fake = ({brandx}) => {
    const {brands} =brandx
   
    return (
        <div>
             <div className='flex items-center flex-wrap justify-center gap-6 lg:gap-16 mt-10 '>
            {
                brands?.map(brand=><Brands brand={brand} key={brand._id}  ></Brands> )
               
            }
            </div>
        </div>
    );
};

export default Fake;