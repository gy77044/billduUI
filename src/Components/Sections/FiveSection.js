import React from 'react'
import s8Beaver from "../../assest/svg/s8-beaver.svg"
import grid00 from "../../assest/svg/grid00.svg";
import grid01 from "../../assest/svg/grid01.svg";
import grid02 from "../../assest/svg/grid02.svg";
import grid10 from "../../assest/svg/grid10.svg";
import grid11 from "../../assest/svg/grid11.svg";
import grid12 from "../../assest/svg/grid12.svg";
import { HiArrowSmRight } from "react-icons/hi";
import Marque from "../CarouselSlider/Marque";
import '../../assest/css/FiveSection.css'

const FiveSection = () => {
  return (
    <>
      {/* <section className="section-6">
        <div className="s6-text-container">
          <div className="s6-text1">UNIQUE FOR EVERY SMALL BUSINESS</div>
          <div className="s6-text2">
            For small businesses, Billdu keeps your business organized and
            accessible. For larger teams, advanced features help your business
            scale easily ... in app or online.
          </div>
        </div>
        <div className="s6-grid-container">
          <div className="s6-grid-row">
            <div className="s6-grid-box grid00">
              <img className="s6-grid-img" alt="gridimg" src={grid00} />
              <div className="s6-grid-text1">CREATIVES & MARKETING</div>
              <div className="s6-grid-text2">
                Make appointments Send professional invoices Receive quote
                requests
              </div>
            </div>
            <div className="s6-grid-box grid01">
              <img className="s6-grid-img" alt="gridimg" src={grid01} />
              <div className="s6-grid-text1">CRAFTSMEN & PUBLIC SERVICES</div>
              <div className="s6-grid-text2">
                Share public profile Send estimates Accept online bookings
              </div>
            </div>
            <div className="s6-grid-box grid02">
              <img className="s6-grid-img" alt="gridimg" src={grid02} />
              <div className="s6-grid-text1">SHOPPING & RETAIL</div>
              <div className="s6-grid-text2">
                Simple online store Customer live chat support Website widget
              </div>
            </div>
          </div>
          <div className="s6-grid-row">
            <div className="s6-grid-box grid10">
              <img className="s6-grid-img" alt="gridimg" src={grid10} />
              <div className="s6-grid-text1">DEVELOPERS & IT</div>
              <div className="s6-grid-text2">
                Business inbox Track expenses Send superfast invoices
              </div>
            </div>
            <div className="s6-grid-box grid11">
              <img className="s6-grid-img" alt="gridimg" src={grid11} />
              <div className="s6-grid-text1">HOTELS & RESTAURANTS</div>
              <div className="s6-grid-text2">
                Availability management Room or table bookings Accept online
                payments
              </div>
            </div>
            <div className="s6-grid-box grid12">
              <img className="s6-grid-img" alt="gridimg" src={grid12} />
              <div className="s6-grid-text1">TRAVEL & TRANSPORTATION</div>
              <div className="s6-grid-text2">
                On-the-go management Accept online bookings Easy CRM system
              </div>
            </div>
          </div>
        </div>
        <button className="s6-btn">
          <span>TRY IT FREE</span>
          <HiArrowSmRight size={25} />
        </button>
      </section> */}
      {/* <section className="section-7">
        <div className="section-7-text">
        
          <img
            className="section-7-img"
            src={require("../../assest/images/hand.png")}
            alt=""
          />
          <div className="section-7-text-2">LET PEOPLE DO THE TALKING</div>
          <div className="s1-text3 text-xl text-blue-700 font-medium">
            <span className="section-7-rating ">★★★★★</span> 4.8 • 45K RATINGS
          </div>
        </div>
        <img src="" alt="" />
      </section> */}
      {/* <section className="section-10">
        <Marque />

        <button className="s6-btn">
          <span>READ MORE ON TRUST PILOT</span>
          <HiArrowSmRight size={20} />
        </button>
      </section> */}
      <section className="section-8">
        <div className="s8-img-container">
          <img className="s8-img" alt="Beaver proud" src={s8Beaver} />
        </div>
        <div className="s8-text-container mb-5 p-8">
          <div className="s8-text1 ">Get Started with Billdu</div>
          <button className="s8-btn">
            <span>TRY IT FREE</span>
            <HiArrowSmRight size={25} />
          </button>
          <p className="s8-text2">Invoicing · Sales</p>
        </div>
      </section>
      <div className="svglogo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20px"
          height="30px"
          viewBox="0 0 28 32"
          fill="#ffffff"
        >
          <path d="M28 32s-4.714-1.855-8.527-3.34H3.437C1.54 28.66 0 27.026 0 25.013V3.644C0 1.633 1.54 0 3.437 0h21.125c1.898 0 3.437 1.632 3.437 3.645v18.404H28V32zm-4.139-11.982a.88.88 0 00-1.292-.105c-.03.026-3.015 2.681-8.57 2.681-5.486 0-8.517-2.636-8.571-2.684a.88.88 0 00-1.29.107 1.01 1.01 0 00-.219.708.992.992 0 00.318.664c.142.128 3.537 3.15 9.762 3.15 6.226 0 9.621-3.022 9.763-3.15a.992.992 0 00.317-.664 1.01 1.01 0 00-.218-.707z"></path>
        </svg>
      </div>
    </>
  )
}

export default FiveSection