import React from 'react';
import '../../index.css';
import AboutMainImage from '../../assets/about_logi.jpg';
import PackageIcon from '../../assets/package-icon.png';
import { CheckCheck, ArrowRight } from 'lucide-react';

const AboutCompany = () => {
  return (
    <section id="about-us" className="flex flex-col lg:flex-row gap-10">
        {/* About Text */}
        <div className='grow-2 p-2.5 lg:w-[60%] '>
            <div id="title-wrapper">
                <span id="sub-title" className='flex items-center gap-2 text-[#f55b1f] font-outfit font-semibold'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="9" viewBox="0 0 25 9" fill="none"><path d="M0 0H9V9H0V0Z" fill="#f55b1f"></path><path d="M9 4H25V5H9V4Z" fill="#f55b1f"></path></svg>
                    ABOUT COMPANY
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="9" viewBox="0 0 25 9" fill="none"><path d="M25 0H16V9H25V0Z" fill="#f55b1f"></path><path d="M16 4H0V5H16V4Z" fill="#f55b1f"></path></svg>
                </span>
                <h2 id="title" className='text-[42px] leading-[52px] mt-2.5 mb-3.5 font-outfit text-wrap font-bold'>Digital & Trusted Transport Logistic Company</h2>
            </div>
            
            <p id="description" className='text-[#666666] font-jakarta leading-7'>Our global logistics expertise, advanced supply chain technology & customized logistics solutions will help you analyze, develop and implement successful supply chain management strategies from end-to-end.</p>
            
            <div className='my-10 flex justify-around gap-4 lg:justify-between '>
                <div id="online-tracing" className='max-w-[40%]'>
                    <div id="box-inner" className='flex gap-4'>
                        <div id="icon-area" className='pt-4'>
                            <img src={PackageIcon} width={80} alt="Package Icon" />
                        </div>
                        <div id="text-area" className='flex flex-col'>
                            <h4 className='text-xl font-bold text-nowrap'>Online Tracing</h4>
                            <p className='font-jakarta text-[#666666] pt-2'>This is a long established fact that a reader</p>
                        </div>
                    </div>
                </div>
                <div id="bullet-points">
                    <ul className='flex flex-col gap-2'>
                        <li className='flex items-center gap-2'>
                            <CheckCheck className='inline-block' color='orange'/>
                            <p className='font-semibold font-outfit text-nowrap'>On-Time Delivery Rate Improvement</p>
                        </li>
                        <li className='flex items-center gap-2'>
                            <CheckCheck className='inline-block' color="orange" />
                            <p className='font-semibold font-outfit'>Fleet Expansion and Modernisation</p>
                        </li>
                        <li className='flex items-center gap-2'>
                            <CheckCheck className='inline-block' color="orange"/>
                            <p className='font-semibold font-outfit'>Advanced Technology Integration</p>
                        </li>
                    </ul>
                </div>
            </div>

            <button className='bg-orange-600 py-[18px] px-8 font-jakarta font-semibold text-white flex items-center'>
                Discover More
                <ArrowRight className='inline-block ml-2' color='white' />
            </button>
        </div>

        {/* Image */}
        <div className='relative grow-1 w-full lg:w-[40%] lg:mt-20 xl:mt-5'>
            <img src={AboutMainImage} alt="About Main Image" className='w-[90%]' />
            <div id="about-image-tag" className='bg-[#F55B1F] flex flex-col justify-center text-white p-5 h-36 w-36'>
                <span className='text-5xl font-bold text-center'>25</span>
                <p className='font-bold text-lg text-center mt-2 font-jakarta'>Years of <br /> Experience</p>
            </div>
        </div>
    </section>
  )
}

export default AboutCompany;