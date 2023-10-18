import React from 'react'
import s4Beaver from "../../assest/svg/s4-beaver.svg"
import s5Beaver from "../../assest/svg/s5-beaver.svg"
import Slideshow from "../CarouselSlider/SlideShow";
import { SliderData } from '../CarouselSlider/SliderDate'

const FourSection = () => {
  return (
    <>
      <div className='mb-50'>
        <div class="md:flex md:items-center  mt-60 md:mx-60">
          <div className='text-9xl font-bold text-blue-700 mb-10'>1</div>
          <div className='md:pl-16'>
            <strong className='text-3xl text-blue-700 font-bold leading-loose'>INVOICING</strong>
            <div className='text-xl text-blue-700 font-bold mb-8'>Turn your invoicing and payment experience into a fast and
              simple process. You’ll definitely love our pro
              invoice maker!</div>
          </div>
          <img alt="" src={s4Beaver} />
        </div>
        <div>
          <div className="slider-container">
            <div className="slider-1">
              <Slideshow slides={SliderData} />
            </div>
          </div>
        </div>
      </div>
      <div className='' >
        <div class="md:flex md:items-center  md:mt-60 md:mx-60">
          <div className='text-9xl font-bold text-blue-700 mb-10'>2</div>
          <div className='md:pl-16'>
            <strong className='text-3xl text-blue-700 font-bold leading-loose'>SALES</strong>
            <div className='text-xl text-blue-700 font-bold mb-8'> Online Booking, Online Store and Quote request. Deliver your
              products to the hands of your customers.</div>
          </div>
          <img alt="" src={s5Beaver} />
        </div>
        <div>
          <div className="slider-container">
            <div className="slider-1">
              <Slideshow slides={SliderData} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FourSection