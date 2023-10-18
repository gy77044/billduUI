// import "../../assest/scss/Footer.scss";
import { AiTwotoneHeart } from "react-icons/ai";
import footerImg from "../assest/svg/footer-image.svg";
import { AiFillStar } from "react-icons/ai";
import downloadApple from "../assest/svg/download-apple-store.svg";
import downloadAndroid from "../assest/svg/download-google-store.svg";
import "../assest/css/Footer.css"
const Footer = () => {
  const footerGp1 = {
    Invoicing: "/",
    Sales: "/",
    Communication: "/",
  };
  const footerGp2 = {
    "Invoice Maker": "/",
    "Beyond Online Invoices": "/",
    "E-commerce Invoices": "/",
    "Invoicing Security": "/",
    "Mobile Invoicing": "/",
    "Smartphones & Tablets": "/",
    "iPad App": "/",
    "iPhone App": "/",
    "Android App": "/",
  };
  const footerGp3 = {
    " Invoice Templates": "/",
    "Invoice Template Australia": "/",
    "Invoice Template UK ": "/",
    "Invoice Template NZ": "/",
    "Invoice Template Canada": "/",
    "Blank Invoice Template": "/",
    "Excel Invoice Template": "/",
    "Google Docs Invoices": "/",
    "Word Invoice Template": "/",
    "PDF Invoice Template": "/",
    "Quote Template": "/",
    "Simple Invoice Template": "/",
    "Proforma invoice template": "/",
    "Credit note template": "/",
    "Delivery note template": "/",
    "Purchase order template": "/",
    "Pages Invoice Template": "/",
  };
  const footerGp4 = {
    "Free Invoice Generator": "/",
    "Invoice Generator AU": "/",
    "Invoice Generator UK": "/",
    "Invoice Generator NZ": "/",
    "Estimate Generator": "/",
    "Quote generator": "/",
    "Proforma Invoice Generator": "/",
    "Credit Note Generator": "/",
    "Delivery Note Generator": "/",
    "Purchase Order Generator": "/",
  };
  const footerGp5 = {
    Spanish: "/",
    French: "/",
    German: "/",
    Slovak: "/",
  };
  const footerGp6 = {
    "Data Protection": "/",
    FAQs: "/",
    API: "/",
    Blog: "/",
  };
  const footerGp7 = {
    "How to Create an Invoice for Free": "/",
    "What a professional invoice template looks like": "/",
    "8 Best Invoicing Software in Australia of 2023": "/",
    "7 Best Small Business Accounting Software in Australia for 2023": "/",
    "Understanding Invoice Payment Terms": "/",
  };
  return (
    <div className="footer-container">
      <div className="footer-top-row">
        <div className="footer-box">
          <div className="footer-rating-container">
            <ul>
              <li className="footer-rating-star">
                <AiFillStar />
              </li>
              <li className="footer-rating-star">
                <AiFillStar />
              </li>
              <li className="footer-rating-star">
                <AiFillStar />
              </li>
              <li className="footer-rating-star">
                <AiFillStar />
              </li>
              <li className="footer-rating-star">
                <AiFillStar />
              </li>
            </ul>
            <div className="footer-box-text1">4.8 · 45K RATINGS</div>
          </div>
          <div className="footer-img-container">
            <img alt="footer img" src={footerImg} />
          </div>
          <div className="footer-box-text2">INVOICE & BOOKING</div>
          <div className="footer-box-text3">
            All the business tools you need in one app
          </div>
          <div className="footer-app-btn">
            <img
              className="footer-box-img"
              alt="apple store"
              src={downloadApple}
            />
            <img
              className="footer-box-img"
              alt="android store"
              src={downloadAndroid}
            />
          </div>
        </div>

        <section className="section-footer">

          <div className="sfooter-grid-container">
            <div className="sfooter-grid-row">
              <div className="sfooter-grid-box ">

                <div className="footerGp-heading">SOLUTIONS</div>
                {Object.keys(footerGp1).map((item, key) => {
                  return (
                    <a className="footerGp-link" key={key} href={footerGp1.item}>
                      {item}
                    </a>
                  );
                })}


              </div>
              <div className="sfooter-grid-box ">

                <div className="footerGp-heading">FEATURES</div>
                {Object.keys(footerGp2).map((item, key) => {
                  return (
                    <a className="footerGp-link" key={key} href={footerGp2.item}>
                      {item}
                    </a>
                  );
                })}
              </div>
              <div className="sfooter-grid-box ">

                <div className="footerGp-heading">TEMPLATES</div>
                {Object.keys(footerGp3).map((item, key) => {
                  return (
                    <a className="footerGp-link" key={key} href={footerGp3.item}>
                      {item}
                    </a>
                  );
                })}
              </div>
            </div>
            <div className="sfooter-grid-row">
              <div className="sfooter-grid-box ">

                <div className="footerGp-heading">FREE GENERATIONS</div>
                {Object.keys(footerGp4).map((item, key) => {
                  return (
                    <a className="footerGp-link" key={key} href={footerGp4.item}>
                      {item}
                    </a>
                  );
                })}
              </div>
              <div className="sfooter-grid-box ">

                <div className="footerGp-heading">LANGUAGES</div>
                {Object.keys(footerGp5).map((item, key) => {
                  return (
                    <a className="footerGp-link" key={key} href={footerGp5.item}>
                      {item}
                    </a>
                  );
                })}
              </div>
              <div className="sfooter-grid-box ">

                <div className="footerGp-heading">LEARN</div>
                {Object.keys(footerGp6).map((item, key) => {
                  return (
                    <a className="footerGp-link" key={key} href={footerGp6.item}>
                      {item}
                    </a>
                  );
                })}
              </div>
            </div>
            <div className="sfooter-grid-row">
              <div className="sfooter-grid-box ">

                <div className="footerGp-heading">FROM THE BLOG</div>
                {Object.keys(footerGp7).map((item, key) => {
                  return (
                    <a className="footerGp-link" key={key} href={footerGp7.item}>
                      {item}
                    </a>
                  );
                })}
              </div>

            </div>
          </div>

        </section>
      </div>
      <div className="footer-bottom-row">
        <div className="footer-text1 items-center ">
          MADE WITH
          <span className="footer-icon-heart mx-1">
            <AiTwotoneHeart />
          </span>
          FOR SMALL BUSINESS OWNERS
        </div>
        <div className="footer-text2">
          © 2023 Billdu Ltd. · 3rd Floor · 120 Baker Street · London W1U 6TU ·
          United Kingdom · Terms of use · Privacy policy
        </div>
      </div>
    </div>
  );
};
export default Footer;
