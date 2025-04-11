// Why Chooose Us?
import React from 'react';
import ChooseUs from '../../assets/choose-img1.png';
import Container from '../../components/Container';

const Features = () => {
  return (
    <Container>
      <section id="why-choose-us" className='flex flex-col gap-10'>
        <div id="title-wrapper">
          <span id="sub-title" className='flex items-center gap-2 text-[#f55b1f] font-outfit font-semibold'>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="9" viewBox="0 0 25 9" fill="none"><path d="M0 0H9V9H0V0Z" fill="#f55b1f"></path><path d="M9 4H25V5H9V4Z" fill="#f55b1f"></path></svg>
            WHY CHOOSE US?
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="9" viewBox="0 0 25 9" fill="none"><path d="M25 0H16V9H25V0Z" fill="#f55b1f"></path><path d="M16 4H0V5H16V4Z" fill="#f55b1f"></path></svg>
          </span>
          <h2 id="title" className='text-[30px] leading-[52px] mt-2.5 mb-3.5 font-outfit text-wrap font-bold'>Today's Fast Paced World, Efficient Logistics.</h2>
        </div>

        <div className='flex flex-col lg:flex-row'>
          {/* Image */}
          <div className='flex'>
            <img src={ChooseUs} alt="Choose Us" className='max-w-[368px]' />
          </div>

          {/* Features Grid (using grid) */}
          <div className='grid grid-cols-2 grid-rows-2 gap-4 mt-10 lg:mt-0'>
            <div className='flex'>1</div>

            <div className='flex'>2</div>
            <div className='flex'>3</div>
            <div className='flex'>4</div>
          </div>
        </div>
      </section>
    </Container>
  )
}

export default Features;