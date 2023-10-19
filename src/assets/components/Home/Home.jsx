import img from'../../imgaes/banner 3.png'
import img2 from'../../imgaes/banner 4.png'
import banner from '../../imgaes/banner 2.png'
import { useEffect } from 'react'
import 'aos/dist/aos.css'; 
import AOS from 'aos';


import 'aos/dist/aos.css';
import { NavLink, useLoaderData } from 'react-router-dom';

import Fake from './Fake';

const Home = () => {
  useEffect(()=>{
       
    AOS.init();
  
      },[])
  
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
        <h1 className="text-3xl font-bold text-[#FCB100]">Available Brands  </h1>
        <p className='py-3 font-semibold' >TechLab-z is your ultimate destination for all things tech. Explore the latest in technology, from cutting-edge computer components to top-notch mobile devices, all in one place. Discover, shop, and stay updated with the world of gadgets and gear. Click brands to watch brand producs-</p>
       
        {
         
          brands?.map(brandx =><Fake key={brandx._id} brandx={brandx}  ></Fake>)
          
        }

      </section>
        <div data-aos="flip-down" className='max-w-7xl mx-auto mt-10 '>
        <img className='rounded shadow-xl' src={img} alt="" />
        </div>
        <div data-aos="flip-up" className='max-w-7xl mx-auto mt-10 '>
        <img className='rounded' src={img2} alt="" />
        </div>
    </div>
  );
};

export default Home;