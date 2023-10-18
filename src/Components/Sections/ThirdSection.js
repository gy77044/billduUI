import React from 'react'
import paypal from "../../assest/svg/pay-pal.svg"
import stripe from "../../assest/svg/stripe.svg"
import xero from "../../assest/svg/xero.svg"
const ThirdSection = () => {
  return (
    <>
      <div className='text-1xl text-blue-700 font-bold mb-10 flex justify-center'>IN PARTNERSHIP WITH THE BEST</div>

      <div class="flex justify-around md:flex-wrap  mb-10">
        <img className="s3-img1" alt="paypal" src={paypal} />
        <img className="s3-img2" alt="stripe" src={stripe} />
        <img className="s3-img3" alt="xero" src={xero} />
      </div>
    </>
  )
}

export default ThirdSection