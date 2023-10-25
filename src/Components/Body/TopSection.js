import React from 'react'
import { HiArrowSmRight } from 'react-icons/hi'

const TopSection = ({ mainHeader, subHeader, isButton }) => {
  return (
    <div className='relative flex flex-col justify-center items-center text-[#0028F2] p-4 h-fit w-full'>
      <h1 className="mt-20 mb-10 text-center text-2xl font-extrabold leading-none tracking-tight  md:text-4xl lg:text-4xl ">{mainHeader}</h1>
      <p className=" text-center text-lg font-normal p-4 lg:text-xl  ">{subHeader} </p>
      {isButton && <button type="button" className="flex items-center text-white bg-[#ff7846] hover:bg-white hover:text-[#ff7846] border-[0.4vh] border-[#ff7846] font-bold rounded-full text-base px-5 py-3 mt-5 mb-32">GENERATE FREE CUSTOM INVOICE  <HiArrowSmRight size={25} /> </button>}
    </div>

  )
}

export default TopSection