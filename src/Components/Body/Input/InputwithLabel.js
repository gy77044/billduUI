import React, { useState } from 'react'

const InputwithLabel = ({ labelname, Type }) => {
  const [inpVal, setInpVal] = useState("")
  return (
    <div>
      <label htmlFor={labelname} className="block mb-2 text-xs uppercase text-black font-bold">{labelname}</label>
      <input type={Type} id={labelname} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " value={inpVal} required onChange={(e) => setInpVal(e.target.value)} />
    </div>
  )
}

export default InputwithLabel