import React from 'react'

const BilledDetail = ({ label1, label2, label3, istooltip, onClick, showData }) => {

  return (
    <>
      <div className='relative p-2'>
        <label htmlFor="" className='text-xs uppercase text-black font-bold '>{label1}</label>
        {istooltip && <>
          <div className='relative'>
            <div className="absolute flex justify-center items-center z-10  p-4 ml-32 -my-11 w-[32vh] h-[8vh] text-xs font-medium text-white bg-gray-900 rounded-lg">
              Start here by entering your business details
            </div>
            <div className=" absolute w-0 h-0 mt-2 ml-56 
              border-l-[10px] border-l-transparent
              border-t-[10px] border-black
              border-r-[10px] border-r-transparent">
            </div>
          </div>
        </>}
        <div className="flex items-center justify-center w-full mt-2" onClick={onClick}>
          <label className="flex flex-col items-center justify-center w-full  border-[0.1vh] border-[#9191a1] border-dashed rounded-lg cursor-pointer ">
            {showData.bname !== "" ? (
              <div>
                <p>Name: {showData.bname}</p>
                <p>Email: {showData.bemail}</p>
                {/* Add more fields as needed */}
              </div>
            ) : (
              <div className="w-full h-44 flex flex-col justify-center items-center py-5 px-6">
                <p className="text-sm text-black font-extrabold pb-2">{label2}</p>
                <button type="button" className="py-2.5 px-5 text-sm font-bold text-[#0028F2] focus:outline-none bg-white rounded-lg border border-[#0028F2]" onClick={onClick}>
                  {label3}
                </button>
              </div>
            )}
          </label>
        </div>
      </div>
    </>
  )
}

export default BilledDetail