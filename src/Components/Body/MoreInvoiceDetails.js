import React from 'react'
import { HiArrowSmRight } from 'react-icons/hi'

const MoreInvoiceDetails = () => {
  return (
    <>
      <div className={`md:flex h-fit w-full mx-auto max-w-7xl p-4`}>
        <img src={require("../../assest/images/invoicesw.webp")} alt="" className='w-full sm:w-[50%] md:w-[50%] lg:w-[50%] h-fit' />
        <div className=''>
          <p className='text-3xl text-[#0028F2] font-bold'>MORE THAN JUST INVOICE</p>
          <p className='text-[16px] text-[#0028F2] font-normal mt-7'>Like what you see so far? Consider giving the Billdu app a try. Our free invoice generator lets you quickly and easily create and customize invoices, but its capabilities beyond that are limited.</p>
          <p className='text-[16px] text-[#0028F2] font-normal mt-7'>On the other hand, the Billdu app does not only save your settings, template presets, and business details for you and your clients to help you generate invoices faster, but it also offers a variety of other helpful features for small businesses.</p>
          <p className='text-[16px] text-[#0028F2] font-normal mt-7'>Thanks to its intuitive, cloud-based design, Billdu works across all devices, including desktops, iOS, and Android. Generate documents like invoices and estimates on the fly, notify your clients with payment reminders and get paid on time, enable online payments to make it convenient for your clients. Access your expense reports anytime, free your hands by inviting an accountant to your business and save the time with recurring invoices.</p>
          <p className='text-[16px] text-[#0028F2] font-normal mt-7'>Give your business what it needs and focus on what matters.</p>
        </div>
      </div>
      <div className='flex justify-center items-center'>
        <button type="button" className="flex items-center text-white bg-[#ff7846] hover:bg-white hover:text-[#ff7846] border-[0.4vh] border-[#ff7846] font-bold rounded-full text-base px-20 py-3 mt-12 sm:mt-20 md:mt-20 lg:mt-20">TRY IT FREE  <HiArrowSmRight size={25} /> </button>

      </div>
    </>
  )
}

export default MoreInvoiceDetails