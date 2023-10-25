import React from 'react'
import DarkButton from '../Button/DarkButton'
import LightButton from '../Button/LightButton'

const InvoiceBottom = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center mx-auto bg-[#f6f7f8] p-4'>
      <DarkButton name="generate document" />
      <LightButton name="Send Document by Email" />

    </div>
  )
}

export default InvoiceBottom