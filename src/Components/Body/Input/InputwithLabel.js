import React, { useState } from 'react'
import { IconDelete } from '../../../assest/Icon'

const InputwithLabel = ({ labelname, Type }) => {
  const [inpVal, setInpVal] = useState("")
  return (
    <div>
      <label htmlFor={labelname} className="block mb-2 text-xs uppercase text-black font-bold">{labelname}</label>
      <div className='flex'>

        <input type={Type} id={labelname} placeholder='' className=" border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " value={inpVal} required onChange={(e) => setInpVal(e.target.value)} />
        {
          labelname === "TOTAL ($)" ? <IconDelete /> : ""
        }
      </div>
    </div>
  )
}

export default InputwithLabel