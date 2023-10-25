import React from 'react'
import { IconCircle } from '../../assest/Icon'

const LabelwithValue = ({ label, value }) => {
  return (
    <>
      <div className='flex text-center mx-4 py-2'>
        <p className='capitalize text-xs text-[#000]'>{label}:</p>
        <p className='uppercase text-xs font-bold mx-2 '>{value === "." ? <IconCircle /> : value}</p>
      </div>
    </>
  )
}

export default LabelwithValue