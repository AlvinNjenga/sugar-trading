import React from 'react'

const InfoSectionDivider = () => {
  return (
    <>
      <div id="info-section-divider" className='flex-col justify-center items-end lg:flex'>
          <div
            id="info-section-content"
            className='text-white h-full w-full flex justify-end py-12 lg:py-16 lg:w-2/3'
          >
            <div className=' flex justify-center px-5 items-center lg:w-[60%] lg:px-2'>
              <p id="info-section-text" className='font-bold italic font-jakarta text-[16px] pl-5 border-l-5 border-white'>Logisti Group is a representative logistics operator providing full range of service in the sphere of customs clearance and transportation in all country around the world for any type of cargo.</p>
            </div>
          </div>
      </div>
    </>
  )
}

export default InfoSectionDivider;