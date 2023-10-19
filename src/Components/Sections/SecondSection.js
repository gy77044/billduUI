import React from 'react'
import s2Beaver from '../../assest/svg/s2Beaver.svg'
import { HiArrowSmRight } from 'react-icons/hi'
// import bgImg from '../../assest/images/wavybg.png'
const SecondSection = () => {
  return (
    <div className='md:bg-fixed bg-no-repeat  bgImage' >
      <div class="relative justify-center items-center m-30 md:m-40  md:flex" >
        <div className="md:p-6   md:order-2"> <img
          className="s1-img"
          alt="Pro invoice maker for small businesses"
          src={s2Beaver}
        /></div>
        <div className="md:p-6 md:w-1/2 md:order-1">
          <div className="text-4xl text-blue-700 font-bold p-10 md:mb-10">SURE, BILLDU DOES AWESOME <span className="underline">INVOICES!</span>{" "}
            BUT THERE'S ALSO{" "}
            <span className="underline">ONLINE BOOKING, ONLINE STORE </span>AND
            MANY OTHER TOOLS</div>
          <div className="text-2xl text-blue-700 font-bold p-10 md:mb-8"> Turn features on and off as you grow. Discover our invoice maker
            app.</div>

          <button className="flex text-3xl items-center text-blue-700 bg-transparent border-[0.4vh] border-blue-700 hover:bg-blue-700 hover:text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-full text-sm px-14 py-2 text-center mr-3 m-10 mb-8 md:mr-0">TRY IT FREE  <HiArrowSmRight size={30} /></button>

        </div>
      </div>
    </div>
  )
}

export default SecondSection