import React from 'react'

const TextArea = (name, onChange, value) => {
  return (
    <>

      <div>
        <label htmlFor="message" className="block mb-2 text-xs uppercase text-black font-bold">NOTE</label>
        <textarea id="message" rows="4" className="block min-h-[25vh] p-2.5 w-full text-sm text-gray-900  rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" name={name} value={value} onChange={onChange} ></textarea>

      </div>
    </>
  )
}

export default TextArea