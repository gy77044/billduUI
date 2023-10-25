import React from 'react'

const UploadLogo = () => {
  return (
    <>
      <div className="flex items-center justify-center w-full p-2 mb-3  ">
        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full  border-[0.1vh] border-[#9191a1] border-dashed rounded-lg cursor-pointer ">
          <div className="w-full flex justify-between items-center py-5 px-6">
            <div className='flex items-center'>
              <svg className="w-8 h-8  text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
              </svg>
              <div className='px-10'>
                <p className=" text-sm text-black font-extrabold pb-2">ADD YOUR LOGO</p>
                <p className="text-xs text-gray-500 ">Not required</p>
              </div>
            </div>
            <div className="py-2.5 px-5 text-sm font-bold text-[#0028F2] focus:outline-none bg-white rounded-lg border border-[#0028F2] ">SELECT FILE</div>
          </div>
          <input id="dropzone-file" type="file" className="hidden" />
        </label>
      </div>

    </>
  )
}

export default UploadLogo