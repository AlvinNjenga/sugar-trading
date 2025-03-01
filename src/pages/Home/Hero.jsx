import React from 'react';
import Header from '../../components/Header';
import Line from '../../assets/line.png';

const Hero = () => {
  return (
    <section id="home-hero" className='flex flex-col min-h-[50vh] sm:min-h-[60vh] md:min-h-[80vh] lg:min-h-[100vh]'>
      <Header />
      <div id="hero-container" className='flex grow-1 items-center'>
        <div className='ml-12 flex flex-col'>
          <p className='text-[#F55B1F] text-xs capitalize font-outfit'>EFFORTLESS SHIPPING</p>
          <h1 className='mt-1 mb-5 text-white font-extrabold font-outfit leading-[1.2] text-[clamp(28px,5vw,72px)]'>Modern Logistics <br />Transportation</h1>
          <img src={Line} alt="line" className='w-[40%] md:w-[50%] lg:w-[60%]' />
          <a href="#about-company" className='w-[118px] h-[48px] mt-14'>
            <div className='request-quote-btn py-[12px] px-[16px] w-[118px] font-semibold text-[16px] font-jakarta bg-[#F55B1F] text-white cursor-pointer'>
              Learn More
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero;