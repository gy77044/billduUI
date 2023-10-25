import React, { useState, useEffect } from 'react'
import LogoImg from '../assest/images/weblogo.png'

const Navbar = () => {

  const [logoHeight, setLogoHeight] = useState('50px');
  const [navHeight, setNavHeight] = useState('100px');
  const [showShadow, setShadow] = useState(false);
  const handleScroll = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      setLogoHeight('45px');
      setNavHeight("72px")
      setShadow(true)

    } else {
      setLogoHeight('50px');
      setNavHeight("100px")
      setShadow(false)
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <nav className="bg-white fixed w-full z-20 top-0 left-0 " style={{ boxShadow: showShadow ? "0 0 6px 3px rgba(0, 0, 0, 0.3)" : "0 0 0 0px rgba(0, 0, 0, 0.0)", height: navHeight }}>
        <div className=" flex flex-wrap items-center justify-between mx-auto p-4">

          <img src={LogoImg} style={{
            height: logoHeight
          }} className="mr-3" alt="Billdu Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap "></span>

          <div className="flex md:order-2">
            <button type="button" className="hidden md:block text-blue-700 hover:text-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 mr-4 ">LOG IN</button>
            <button type="button" className="text-white bg-orange-600 border-[0.4vh] border-orange-600 hover:bg-white hover:text-orange-600  focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-full text-sm px-4 py-2 text-center mr-3 md:mr-0 ">TRY IT FREE</button>
            <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-sticky" aria-expanded="false">
              <span className="sr-only"></span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-bold border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white ">
              <li className='flex text-center group' >
                <div className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 group-hover:text-orange-600" aria-current="page">PRODUCTS </div><span className="material-symbols-outlined text-blue-700 group-hover:text-orange-600 group-hover:rotate-180 transition duration-300 ease-in-out">
                  expand_more
                </span>
              </li>
              <li className='flex text-center group'>
                <div className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 group-hover:text-orange-600" aria-current="page">PRICING </div>
              </li>
              <li className='flex text-center group'>
                <div className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 group-hover:text-orange-600" aria-current="page">RESOURCES </div><span className="material-symbols-outlined text-blue-700 group-hover:text-orange-600 group-hover:rotate-180 transition duration-300 ease-in-out">
                  expand_more
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </>
  )
}

export default Navbar