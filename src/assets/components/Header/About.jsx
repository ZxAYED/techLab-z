import React from 'react';

import { Fade, Zoom } from 'react-reveal'; 


const About = () => {
    return (
        <div>
 

    <section id="about-us" className="about-us-section mt-20 max-w-5xl mx-auto h-[43vh]">
      <div className="container text-center">
        <div className="row">
          <div className="col-md-12">
            <Fade bottom>
              <h2 className='text-3xl font-bold text-[#FCB100]'> About Us!</h2>
              <Zoom>
                <h3 style={{ textAlign: 'center' }}>
                  Welcome To <span id="W_Name1" className=' text-[#FCB100] py-3 text-xl font-bold'>TechLab-Z</span>
                </h3>
              </Zoom>
              <p>
                <span id="W_Name2 " className=' text-[#FCB100] font-semibold '> TechLab-Z</span> is a Professional
                <span id="W_Type1">Technology and Electronics sales</span> Platform. Here we will provide you only interesting
                content, which you will like very much. We re dedicated to providing you the best of
                <span id="W_Type2">Technology and Electronics sales</span>, with a focus on dependability and
                <span id="W_Spec">tech store</span>. We re working to turn our passion for
                <span id="W_Type3">Technology and Electronics sales</span> into a booming
                <a className='py-5' href="https://www.blogearns.com/2021/05/free-about-us-page-generator.html" rel="do-follow" style={{ color: 'inherit', textDecoration: 'none' }}>
                  online website
                </a>
                . We hope you enjoy our <span id="W_Type4">Technology and Electronics sales</span> as much as we enjoy
                offering them to you.
              </p>
              <p>
                I will keep posting more important posts on my Website for all of you. Please give your support and love.
              </p>
              <Zoom>
                <p style={{ fontWeight: 'bold', textAlign: 'center' }}>
                  Thanks For Visiting Our Site
                  <br />
                  <br />
                  <span style={{ color: 'blue', fontSize: '16px', fontWeight: 'bold', textAlign: 'center' }}>
                    Have a nice day!
                  </span>
                </p>
              </Zoom>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  



        </div>
    );
};

export default About;