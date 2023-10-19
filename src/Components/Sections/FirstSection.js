import React from 'react'
import s1Beaver from "../../assest/svg/s1-beaver.svg";
import downloadApple from "../../assest/svg/download-apple-store.svg";
import downloadAndroid from "../../assest/svg/download-google-store.svg";
import { HiArrowSmRight } from "react-icons/hi";

const FirstSection = () => {
  return (
    <>
      <div class="relative justify-center items-center m-32 md:m-40  md:flex">
        <div className="  md:p-6 "> <img
          className="s1-img "
          alt="Pro invoice maker for small businesses"
          src={s1Beaver}
        /></div>
        <div className="p-6">
          <div className="text-2xl text-blue-700 font-bold mb-10">EASY INVOICING FOR SMALL BUSINESSES</div>
          <div className="text-5xl text-blue-700 font-extrabold mb-10">THE BEST RATED INVOICING APP</div>
          <button className="flex text-3xl items-center text-white bg-orange-600 border-[0.4vh] border-orange-600 hover:bg-white hover:text-orange-600  focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-full text-sm px-14 py-2 text-center mr-3 mb-8 md:mr-0">TRY IT FREE  <HiArrowSmRight size={30} /></button>
          <div className="text-1.5xl text-blue-700 font-bold mb-5 tracking-wide"> FREE 30 DAY TRIAL • NO CREDIT CARD REQUIRED <br />
            ★★★★★ 4.8 • 45K RATINGS • WEB & MOBILE APP</div>
          <div className="md:flex">
            <img
              className="mr-5 my-5"
              src={downloadApple}
              alt="iPhone/iPad invoice maker app"
            />
            <img
              className=""
              src={downloadAndroid}
              alt="Android invoicing app for small business"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default FirstSection