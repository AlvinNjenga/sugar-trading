import React from 'react';
import AboutMainImage from '../../assets/about_logi.jpg';

const AboutCompany = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-10">
        <div className='bg-pink-100 grow-3 xl:grow-1 p-2.5'>
            
            {/* Section Title */}
            <div id="title-wrapper">
                <span id="sub-title" className='flex items-center gap-2 text-[#f55b1f] font-outfit font-semibold'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="9" viewBox="0 0 25 9" fill="none"><path d="M0 0H9V9H0V0Z" fill="#f55b1f"></path><path d="M9 4H25V5H9V4Z" fill="#f55b1f"></path></svg>
                    ABOUT COMPANY
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="9" viewBox="0 0 25 9" fill="none"><path d="M25 0H16V9H25V0Z" fill="#f55b1f"></path><path d="M16 4H0V5H16V4Z" fill="#f55b1f"></path></svg>
                </span>
                <h2 id="title" className='text-[42px] leading-[52px] mt-2.5 mb-3.5 font-outfit text-wrap font-bold'>Digital & Trusted Transport Logistic Company</h2>
            </div>
            {/* Section Title */}
            
            <p id="description" className='text-[#666666] font-jakarta'>Our global logistics expertise, advanced supply chain technology & customized logistics solutions will help you analyze, develop and implement successful supply chain management strategies from end-to-end.</p>
            
            <div>
                <div id="online-tracing"></div>
                <div id="bullet-points"></div>
            </div>
        </div>
        <div className='bg-pink-100 grow-2 xl:grow-1'>
            <div className='grid grid-cols-8 grid-rows-5 min-w-3xs'>
                <img src={AboutMainImage} alt="About Main Image" className='col-span-8 row-span-5' />
            </div>
        </div>
    </div>
  )
}

export default AboutCompany;