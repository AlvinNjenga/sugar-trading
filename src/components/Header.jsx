import React from 'react';
import Logo from '../assets/sugar-logo.png';
import '../index.css';

const Header = () => {
  return (
    <header  className='flex flex-row justify-between px-10 border-b-[1px] border-b-[#FFFFFF30]'>
      <div id="logo" className='flex items-center'>
        <img
          src={Logo}
          alt="Sugar Logo"
          className='h-[54px]'
        />
      </div>
      <nav>
        <ul className='flex flex-row gap-6 lg:gap-10 items-center text-white py-8 font-jakarta font-medium'>
          {/* TODO: Create a looping component for the links */}
          <li className='transition-all ease-in-out hover:text-[#F55B1F]'><a href="#">Home</a></li>
          <li className='transition-all ease-in-out hover:text-[#F55B1F]'><a href="#">About Us</a></li>
          <li className='transition-all ease-in-out hover:text-[#F55B1F]'><a href="#">Products</a></li>
          <li className='transition-all ease-in-out hover:text-[#F55B1F]'><a href="#">Contact</a></li>
          <li>
            <div className='request-quote-btn py-[17px] px-[26px] bg-[#FFFFFF] text-black font-semibold text-[16px] font-jakarta flex flex-row items-center hover:bg-[#F55B1F] hover:text-white'>
              Request a quote
              <svg className='h-[18px] w-[18px] ml-2.5 text-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M31.71,15.29l-10-10L20.29,6.71,28.59,15H0v2H28.59l-8.29,8.29,1.41,1.41,10-10A1,1,0,0,0,31.71,15.29Z"></path></svg>
              <svg className="hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M31.71,15.29l-10-10L20.29,6.71,28.59,15H0v2H28.59l-8.29,8.29,1.41,1.41,10-10A1,1,0,0,0,31.71,15.29Z"></path></svg>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header; 