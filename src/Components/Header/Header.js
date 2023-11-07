import React, { useState, useEffect } from 'react';
import logoImg from '../../assest/images/weblogo.png';
import '../../assest/scss/Header.scss';
import Lists from '../Globals/Lists';

export const menuList = [
  { name: 'PRODUCTS', arrow: true },
  { name: 'PRICING', arrow: false },
  { name: 'RESOURCES', arrow: true },
];

const Header = () => {

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
      <div
        className="header-container"
        style={{
          boxShadow: showShadow
            ? "0 0 6px 3px rgba(0, 0, 0, 0.3)"
            : "0 0 0 0px rgba(0, 0, 0, 0.0)",
          height: navHeight,
        }}
      >
        <div className="header-hamMenu-container">
          <label className="hamburger-menu">
            <input type="checkbox" />
          </label>
        </div>
        <div className="header-logo-section">
          <img
            style={{
              height: logoHeight,
            }}
            className="header-logo-img"
            src={logoImg}
            alt="Logo"
          />
        </div>
        <div className="header-menu-container">
          {menuList.map((item, index) => (
            <div className={`menu-option`} key={index}>
              <Lists name={item.name} arrow={item.arrow} />
            </div>
          ))}
        </div>

        <div className="header-button-container">
          <div className="login-button">Log in</div>
          <button className="free-button">TRY IT FREE</button>
        </div>
      </div>
      <div></div>
    </>
  );
}

export default Header