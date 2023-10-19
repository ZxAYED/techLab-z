import React from 'react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const News = () => {
    useEffect(()=>{
       
  AOS.init();

    },[])
    return (
        <div>
             <section data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" className='bg-[#FCB100] text-center  text-white  p-6 rounded-xl '> 

             <h1 className='text-2xl text-center py-2 '>Intel: </h1>

<p> Explore the world of computing with Intels top-notch products. From the high-performance Intel Core i7 Processor to lightning-fast SSDs and compact NUC Mini PCs, Intel has your computing demands covered. Discover their Arc A7770 GPU for exceptional graphics performance.</p>

<h1 className='text-2xl text-center py-2'>AMD: </h1>

<p>Description: AMD offers a range of powerful processors, including the Ryzen 9 for ultimate performance and Ryzen 5 for the budget-conscious. Gamers will appreciate the AMD Radeon RX 6800 XT, while tech enthusiasts can explore the AMD Radeon RX 6700 XT.</p>
<h1 className='text-2xl text-center py-2'>Samsung: </h1>
<p>
  Samsung brings innovation to your digital lifestyle. The Galaxy S21 and Galaxy Tab S7 offer top-tier mobile experiences, while the 4K Smart TV and 27-inch Monitor redefine home entertainment. Discover the latest tech from Samsung.</p>

<h1 className='text-2xl text-center py-2'>Huawei:</h1>


<p>Description: Huaweis P40 Pro is a powerhouse phone with a focus on photography. The MateBook X Pro delivers premium computing, while the FreeBuds Pro offer impressive audio quality. Stay connected with the Huawei Watch GT 2 smartwatch.
</p>

<h1 className='text-2xl text-center py-2'>Xiaomi:</h1>

<p>
  Xiaomi offers accessible technology with the Mi 11 smartphone, Mi TV 4S, Redmi Note 12, and Mi Band 6 fitness tracker. From phones to TVs and wearables, Xiaomis products combine quality and affordability.
</p>
<h1 className='text-2xl text-center py-2'>Sony:</h1>

<p>Description: Sony offers a range of products, including the Xperia 1 III smartphone, Bravia OLED TV for stunning visuals, WH-1000XM4 headphones for immersive audio, and the Alpha 7 III camera for photography enthusiasts. Experience excellence with Sony.</p>









</section>
        </div>
    );
};

export default News;