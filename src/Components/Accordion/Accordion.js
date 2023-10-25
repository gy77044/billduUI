import React, { useState } from 'react'
import { IconAdd, IconSubract } from '../../assest/Icon'


const Accordion = ({ name, desc }) => {
  const [isOpen, setIsOpen] = useState(false)
  const handleAccordion = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <div className={`w-full ${isOpen ? "border-[0.5vh] border-dotted border-[#ff7846] rounded-lg" : ""}`}>
        <div className={`cursor-pointer w-full flex justify-between items-center p-4 `} onClick={handleAccordion}>
          <div className='text-xl uppercase text-[#0028F2] font-bold'>{name}</div>
          <div>{isOpen ? <IconSubract /> : <IconAdd />}</div>
        </div>
        {isOpen && <div className='w-full text-base md:text-xl  text-[#0028F2] font-normal p-3'>{desc}</div>}
      </div>
    </>
  )
}

export default Accordion