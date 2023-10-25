import React, { } from 'react'
import { IconArrow } from '../../assest/Icon'

const templateList = [
  { name: "Free online invoice generator AU" },
  { name: "Free online invoice generator UK" },
  { name: "Free online invoice generator NZ" },
  { name: "Word templates" },
  { name: "Excel templates" },
  { name: "PDF templates" },
  { name: "Google Docs templates" },
  { name: "Quote generator" },
  { name: "Estimate generator" },
  { name: "Proforma generator" },
  { name: "Delivery note generator" },
  { name: "Credit note generator" },
  { name: "Purchase order generator" },
]

const AccordionwithArrow = () => {

  return (
    <div className={` flex flex-col justify-between items-center  mx-auto mt-20 p-4 `} >
      <div className='text-3xl lg:text-4xl sm text-center font-extrabold text-[#0028F2] mb-20 w-full md:w-[50%] lg:w-[50%]'>FREE ONLINE INVOICE GENERATOR BY COUNTRY</div>
      {templateList.slice(0, 3).map((itm, index) => {
        return (<>
          <div key={index} className='cursor-pointer w-full md:w-[55%] lg:w-[55%] flex justify-between items-center p-4 border-[0.5vh] border-dotted border-[#ff7846] rounded-lg my-2'>
            <div className='text-xl  text-[#0028F2] font-bold'>{itm.name}</div>
            <div><IconArrow /></div>
          </div>
        </>)
      })}
      <div className='text-3xl lg:text-4xl sm text-center font-extrabold text-[#0028F2] mb-20 mt-52 w-full md:w-[50%] lg:w-[50%]'>NEED OTHER FORMATS? CREATE YOUR INVOICE IN WORD, EXCEL, PDF OR GOOGLE DOCS</div>
      {templateList.slice(3, 7).map((itm, index) => {
        return (<>
          <div key={index} className='cursor-pointer w-full md:w-[55%] lg:w-[55%] flex justify-between items-center p-4 border-[0.5vh] border-dotted border-[#ff7846] rounded-lg my-2'>
            <div className='text-xl  text-[#0028F2] font-bold'>{itm.name}</div>
            <div><IconArrow /></div>
          </div>
        </>)
      })}
      <div className='text-3xl lg:text-4xl sm text-center font-extrabold text-[#0028F2] mb-20 mt-52 w-full md:w-[50%] lg:w-[50%]'>FIND DIFFERENT POPULAR GENERATORS</div>
      {templateList.slice(7, 13).map((itm, index) => {
        return (<>
          <div key={index} className='cursor-pointer w-full md:w-[55%] lg:w-[55%] flex justify-between items-center p-4 border-[0.5vh] border-dotted border-[#ff7846] rounded-lg my-2'>
            <div className='text-xl  text-[#0028F2] font-bold'>{itm.name}</div>
            <div><IconArrow /></div>
          </div>
        </>)
      })}
    </div>
  )
}

export default AccordionwithArrow