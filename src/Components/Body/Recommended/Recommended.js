import React from 'react'
import { IconCorrect } from '../../../assest/Icon'

const recommendList = [
  {
    name: "Creating invoices",
    isFree: true,
    isApp: true
  },
  {
    name: "Customizing invoices",
    isFree: true,
    isApp: true
  },
  {
    name: "Sending invoices",
    isFree: true,
    isApp: true
  },
  {
    name: "Online payments",
    isFree: false,
    isApp: true
  },
  {
    name: "Payment reminders",
    isFree: false,
    isApp: true
  },
  {
    name: "Expense management",
    isFree: false,
    isApp: true
  },
  {
    name: "Recurring invoices",
    isFree: false,
    isApp: true
  },
  {
    name: "Accountant connection",
    isFree: false,
    isApp: true
  },
]
const Recommended = () => {
  return (<>

    {/* <div className='bg-[#f6f7f8]'> */}
    <div className='max-w-5xl mx-auto p-10 hidden  md:block lg:block'>
      <div className='flex justify-between items-center py-4 text-[#0028F2]'>
        <div></div>
        <div className='text-2xl font-bold'></div>
        <div className='text-base font-bold text-[#ff7846]'>RECOMMENDED</div>
      </div>
      <div className='flex justify-between items-center py-4 text-[#0028F2]'>
        <div></div>
        <div className='text-2xl font-bold'>FREE ONLINE INVOICE GENERATOR</div>
        <div className='text-2xl font-bold'>BILLDU APP</div>
      </div>
      <div className='flex justify-between items-center py-4 text-[#0028F2]'>
        <div>
          {recommendList.map((itm, index) => {
            return (<>
              <p key={index} className='mb-2'>
                {itm.name}
              </p>
            </>)
          })}
        </div>
        <div className='flex flex-col justify-center items-center '>
          {recommendList.map((itm, index) => {
            return (<>
              <p key={index} className='mb-2'>
                {itm.isFree ? <IconCorrect /> : "-"}
              </p>
            </>)
          })}
        </div>
        <div>
          {recommendList.map((itm, index) => {
            return (<>
              <p key={index} className='mb-2'>
                {itm.isApp ? <IconCorrect /> : "-"}
              </p>
            </>)
          })}
        </div>
      </div>
      <button type="button" className="flex justify-center items-center text-white bg-[#ff7846] hover:bg-white hover:text-[#ff7846] border-[0.4vh] border-[#ff7846] font-bold rounded-full text-base px-5 py-3 mt-5 mx-auto">TRY THE BILLDU APP TODAY</button>
    </div>
    {/* </div> */}

  </>
  )
}

export default Recommended