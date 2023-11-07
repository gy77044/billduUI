import React from 'react'
import { IconDelete } from '../../../assest/Icon'

const InputwithLabel = ({ labelname, Type, name, onChange, value }) => {

  return (
    <div>
      <label htmlFor={labelname} className="block mb-2 text-xs uppercase text-black font-bold">{labelname}</label>
      <div className='flex'>

        <input name={name} type={Type} id={labelname} placeholder='' className=" border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " value={value} required onChange={onChange} />
        {
          labelname === "TOTAL ($)" ? <IconDelete /> : ""
        }
      </div>
    </div>
  )
}

export default InputwithLabel