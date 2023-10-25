import React from 'react'
import { HiArrowSmRight } from 'react-icons/hi'

const ButtonwithHeader = ({ img, head1, head2, invoicebtn }) => {
  return (
    <>
      <div className='p-2 flex flex-col justify-center items-start'>
        <img src={img} alt="" className='rounded-3xl w-fit h-fit' />
        <h2 className='text-3xl text-[#0028F2] font-bold mt-6'>{head1}</h2>
        <p className='text-base text-[#0028F2] font-normal mt-6'>{head2}</p>
        <button type="button" className="flex items-center text-white bg-[#ff7846] hover:bg-white hover:text-[#ff7846] border-[0.4vh] border-[#ff7846] font-bold rounded-full text-base px-10 py-3 mt-10">{invoicebtn} <HiArrowSmRight size={25} /> </button>
      </div>
    </>
  )
}

export default ButtonwithHeader