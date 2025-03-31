import React from 'react';
import '../index.css';
import Logo from '../assets/sugar-logo.png';
import { ChevronsRight, ArrowRight } from 'lucide-react';



const Footer = () => {
  return (
    <>
    {/* On wider screens */}
    <section className='hidden bg-[#091B21] md:flex'>
        <div className='flex flex-col grow-1 items-center px-4 py-8'>
            <div id="logo-icon" className="flex p-2.5 mb-5 lg:hidden">
                <img src={Logo} alt="Logo" className="w-44 h-14" />
            </div>
            <div id="links" className='flex w-full justify-around text-white'>
                {/* TODO: Hide above logo on lg screens and add a column logo on lg screens */}
                <div id="logo-icon" className="p-2.5 hidden lg:flex lg:w-1/4">
                    <img src={Logo} alt="logo" className='w-44 h-14'/>
                </div>
                <div id="contact-us" className='flex flex-col w-1/3 gap-5 lg:w-1/4'>
                    <h4 className='font-bold text-2xl'>Contact Us</h4>
                    <div id="address" className='flex flex-col gap-1'>
                        <span className='text-[16px] font-bold'>Address:</span>
                        <span className='text-[#BEBEBE] text-[16px] font-jakarta text-wrap'>4517 Washington. mg Manchester, Kentucky 39495</span> 
                    </div>
                    <div id="phone-number" className='flex flex-col gap-1'>
                        <span className='text-[16px] font-bold'>Phone Number:</span> 
                        <span className='text-[#BEBEBE] text-[16px] font-jakarta'>+447000000000</span> 
                    </div>
                </div>

                <div id="quick-links" className='flex flex-col w-1/3 lg:w-1/4'>
                    <h4 className='font-bold text-2xl'>Quick Links</h4>
                    <div className='mt-5'>
                        <ul className='flex flex-col ml-2 gap-2'>
                            <li className='flex items-center w-fit transition-all duration-500 ease-in-out hover:text-orange-600 hover:translate-x-2'>
                                <ChevronsRight className='inline-block mr-1' />
                                <a href="#" className='text-[16px] font-jakarta'>Home</a>
                            </li>
                            <li className='flex items-center w-fit transition-all duration-500 ease-in-out hover:text-orange-600 hover:translate-x-2'>
                                <ChevronsRight className='inline-block mr-1' />
                                <a href="#" className='text-[16px] font-jakarta'>About</a>
                            </li>
                            <li className='flex items-center w-fit transition-all duration-500 ease-in-out hover:text-orange-600 hover:translate-x-2'>
                                <ChevronsRight className='inline-block mr-1' />
                                <a href="#" className='text-[16px] font-jakarta'>Products</a>
                            </li>
                            <li className='flex items-center w-fit transition-all duration-500 ease-in-out hover:text-orange-600 hover:translate-x-2'>
                                <ChevronsRight className='inline-block mr-1' />
                                <a href="#" className='text-[16px] font-jakarta'>Contacts</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div id="newsletter" className='flex flex-col w-1/3 gap-5 lg:w-1/4'>
                    <h4 className='font-bold text-2xl'>Newsletter</h4>
                    <p>Sign up to our awesome weekly newsletter to get the latest updates.</p>
                    <div className='flex items-center'>
                        <input type="email" placeholder='Your email address' className='bg-white text-gray-700 border-b-2 border-white outline-none p-2 w-full' />
                        <button className='bg-orange-600 text-white p-1.5 -m-[40px] cursor-pointer'><ArrowRight /></button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* On smaller screens */}
    <div className='flex flex-col bg-[#091B21] md:hidden'>
        <div className='flex flex-col radial-gradient px-2.5 py-8 text-white gap-6'>
            <div id="logo-icon" className="p-2.5">
                <img src={Logo} alt="logo" className='w-44 h-14'/>
            </div>

            <div id="contact us" className='flex flex-col gap-5 p-2.5'>
                <h4 className='font-bold text-2xl'>Contact Us</h4> 
                <div id="address" className='flex flex-col gap-1'>
                    <span className='text-[16px] font-bold'>Address:</span>
                    <span className='text-[#BEBEBE] text-[16px] font-jakarta'>4517 Washington. mg Manchester, Kentucky 39495</span> 
                </div>
                <div id="phone-number" className='flex flex-col gap-1'>
                    <span className='text-[16px] font-bold'>Phone Number:</span> 
                    <span className='text-[#BEBEBE] text-[16px] font-jakarta'>+447000000000</span> 
                </div>
            </div>

            <div id="quick-links" className='flex flex-col p-2.5'>
                <h4 className='font-bold text-2xl'>Quick Links</h4>
                <div className='mt-3'>
                    <ul className='flex flex-col gap-2'>
                        <li className='flex items-center w-fit transition-all duration-500 ease-in-out hover:text-orange-600 hover:translate-x-2'>
                            <ChevronsRight className='inline-block mr-1' />
                            <a href="#" className='text-[16px] font-jakarta'>Home</a>
                        </li>
                        <li className='flex items-center w-fit transition-all duration-500 ease-in-out hover:text-orange-600 hover:translate-x-2'>
                            <ChevronsRight className='inline-block mr-1' />
                            <a href="#" className='text-[16px] font-jakarta'>About</a>
                        </li>
                        <li className='flex items-center w-fit transition-all duration-500 ease-in-out hover:text-orange-600 hover:translate-x-2'>
                            <ChevronsRight className='inline-block mr-1' />
                            <a href="#" className='text-[16px] font-jakarta'>Products</a>
                        </li>
                        <li className='flex items-center w-fit transition-all duration-500 ease-in-out hover:text-orange-600 hover:translate-x-2'>
                            <ChevronsRight className='inline-block mr-1' />
                            <a href="#" className='text-[16px] font-jakarta'>Contacts</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='h-[1px] w-dww bg-gray-600 -ml-[10px] -mr-[10px]' />
            <div id="copyright-section" className='flex justify-center font-bold font-jakarta text-[#BEBEBE]'>
                Copyright © 2025 Sugar Shipping. All Rights Reserved.
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer;


