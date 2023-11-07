import React from 'react'

const DarkButton = ({ name, onClick }) => {
  return (
    <>
      <button type="button" className="text-white bg-[#0028F2] uppercase font-bold rounded-lg text-sm px-7 py-2.5 text-center inline-flex items-center hover:-lg hover:sshadowhadow-indigo-500/50 " onClick={onClick}>
        {name}
      </button>
    </>
  )
}

export default DarkButton