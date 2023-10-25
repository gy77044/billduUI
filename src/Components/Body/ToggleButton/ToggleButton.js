import React from 'react'

const ToggleButton = () => {
  return (
    <>

      <label className="relative inline-flex items-center mb-2 cursor-pointer">
        <input type="checkbox" value="" className="sr-only peer" checked />
        <div className="w-9 h-5 bg-gray-200 rounded-full peer  peer-checked:after:border-white after:content-[''] after:absolute after:-top-1 after:left-[0px] after:bg-white  after:shadow-sm after:shadow-gray-600 after:border after:border-gray-200 after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-gray-300 "></div>
      </label>

    </>
  )
}

export default ToggleButton