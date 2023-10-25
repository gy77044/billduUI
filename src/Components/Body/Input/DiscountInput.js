import React from 'react'
import ToggleButton from '../ToggleButton/ToggleButton'
const DiscountInput = () => {
  return (
    <>


      <div className="flex justify-end items-end">
        <ToggleButton />

        <button id="dropdown-button-2" data-dropdown-toggle="dropdown-search-city" className="text-sm uppercase text-black font-extrabold rounded-lg  block w-fit px-10 p-2.5" type="button">Discount
        </button>
        <div className="relative w-fit">
          <input type="search" id="location-search" className="block p-2.5 w-fit z-20 text-sm text-black font-extrabold border border-gray-300 rounded-l-lg " required />
          <button type="submit" className="absolute top-0 right-0 h-full p-2.5 px-3.5 text-sm font-medium bg-gray-50 text-blue-700  border border-blue-700">
            %
            <span className="sr-only">Search</span>
          </button>
        </div>
      </div>
      <div className="flex justify-end items-end">
        <div className='w-[80%] mt-16 text-xl text-black '>
          <label htmlFor="" className='uppercase text-xl text-black font-extrabold'>Total</label>
          <div className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-t-lg w-full p-4 flex justify-between font-bold uppercase mt-10" required ><span>discount %</span><span>$ 0.00</span></div>
          <div className="hidden  bg-gray-50 border border-gray-300 text-gray-900 text-xs w-full p-4 justify-between font-bold uppercase" required ><span>sub total</span><span>$ 0.00</span></div>
          <div className="bg-black border border-gray-300 text-white text-xs rounded-b-lg w-full p-4 flex justify-between font-bold uppercase " required ><span>total</span><span>$ 0.00</span></div>
        </div>
      </div>


    </>
  )
}

export default DiscountInput