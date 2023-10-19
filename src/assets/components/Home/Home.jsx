import img from'../../imgaes/banner 3.png'
import img2 from'../../imgaes/banner 4.png'
import banner from '../../imgaes/banner 2.png'
import { useEffect } from 'react'

import 'aos/dist/aos.css';
import { NavLink, useLoaderData } from 'react-router-dom';

import Fake from './Fake';

const Home = () => {
  const brands = useLoaderData();
 
  useEffect(() => {
    <script>
      AOS.init( duration: 1000);
    </script>
  }, [])
  return (
    <div className='mt-2  mx-5 lg:mx-auto'>
      <img className='h-[60vh] w-full object-cover ' src={banner} alt="" />
      <section className='mt-20 max-w-7xl mx-auto '>
        <h1 className="text-3xl font-bold">Available Brands </h1>
       
        {
         
          brands?.map(brandx =><Fake key={brandx._id} brandx={brandx}  ></Fake>)
          
        }

      </section>
        <div className='max-w-7xl mx-auto mt-10 '>
        <img className='rounded shadow-xl' src={img} alt="" />
        </div>
        <div className='max-w-7xl mx-auto mt-10 '>
        <img className='rounded' src={img2} alt="" />
        </div>
    </div>
  );
};

export default Home;