import img1 from '../../imgaes/amd hero.jpg'
import img2 from '../../imgaes/huawei hero.jpg'
import img3 from '../../imgaes/intel hero.jpg'
import img4 from '../../imgaes/xiaomi hero.jpg'
import img5 from '../../imgaes/samsung hero.jpg'
import img6 from '../../imgaes/sony hero.jpg'
import banner from '../../imgaes/banner.jpg'
import { useEffect } from 'react'

import 'aos/dist/aos.css';
import { NavLink } from 'react-router-dom';

const Home = () => {
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
        <div className='flex items-center flex-wrap justify-center gap-6 lg:gap-16 mt-10'>
          <NavLink>
            <div className=''>
              <div className="overflow-hidden">
                <div className="  text-white bg-center transition-transform  scale-100 hover:scale-105  duration-700 " >
                  <img className='h-32 w-36   hover:[rounded-xl] rounded-[50%]  object-fit' src={img1} alt="" />


                </div>
              </div>
              <p className='z-10 font-semibold text-center text-2xl p-6'>Amd</p>
            </div>
          </NavLink>
          <NavLink>
            <div className=''>
              <div className="overflow-hidden">
                <div className="   text-white bg-center transition-transform  scale-100 hover:scale-105  duration-700 " >
                  <img className='h-32 w-36   hover:[rounded-xl] rounded-[50%]  object-fit' src={img2} alt="" />


                </div>
              </div>
              <p className='z-10 font-semibold text-center text-2xl p-6'>Huawei</p>
            </div>
          </NavLink>
          <NavLink>
            <div className=''>
              <div className="overflow-hidden">
                <div className="text-white bg-center transition-transform  scale-100 hover:scale-105  duration-700 " >
                  <img className='h-32 w-36   hover:[rounded-xl] rounded-[50%]  object-fit' src={img3} alt="" />


                </div>
              </div>
              <p className='z-10 font-semibold text-center text-2xl p-6'>Intel</p>
            </div>
          </NavLink>
          <NavLink>
            <div className=''>
              <div className="overflow-hidden">
                <div className="  text-white bg-center transition-transform  scale-100 hover:scale-105  duration-700 " >
                  <img className='h-32 w-36   hover:[rounded-xl] rounded-[50%]  object-fit' src={img4} alt="" />


                </div>
              </div>
              <p className='z-10 font-semibold text-center text-2xl p-6'>Xiaomi</p>
            </div>
          </NavLink>
          <NavLink>
            <div className=''>
              <div className="overflow-hidden">
                <div className=" text-white bg-center transition-transform  scale-100 hover:scale-105  duration-700 " >
                  <img className='h-32 w-36   hover:[rounded-xl] rounded-[50%]  object-fit' src={img5} alt="" />


                </div>
              </div>
              <p className='z-10 font-semibold text-center text-2xl p-6'>SamSung</p>
            </div>
          </NavLink>
          <NavLink>
            <div className=''>
              <div className="overflow-hidden">
                <div className=" text-white bg-center transition-transform  scale-100 hover:scale-105  duration-700 " >
                  <img className='h-32 w-36   hover:[rounded-xl] rounded-[50%]  object-fit' src={img6} alt="" />


                </div>
              </div>
              <p className='z-10 font-semibold text-center text-2xl p-6'>Sony</p>
            </div>
          </NavLink>







        </div>

      </section>

    </div>
  );
};

export default Home;