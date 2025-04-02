import React from "react";
import style from "./Footer.module.css";
import { Link, NavLink } from "react-router-dom";

function Footer() {
  const handlePhoneClick = () => {
    alert(" Welcome To Our DY Patil ACS College                                               Thank you for contacting us!");
  };

  return (
    <>
      <div className={style.f}>
        <div className={style.cnt}>
          <h2>Quick Links</h2>
          <p className={style.para}>
            Newsletter<br />
            Career<br />
            Blogs<br />
            Gallery <br />
            Contact Us
          </p>
        </div>

        <div className={style.contact}>
          <h2>Contact Details</h2>

          <h4>EMAIL:</h4>
          <p>info.acs@dypvp.edu.in</p>

          <div className={style.par}>
            <h4>📞 Mobile:</h4>
            <a 
              href="tel:+919156287235" 
              className={style.callLink} 
              onClick={handlePhoneClick}
            >
              +91 9156287235
            </a>

            <h3>Location</h3>
            <p>
              Dr. D. Y. Patil Unitech Society, Dr. D. Y. Patil Arts, Commerce & Science College
              Sant Tukaram Nagar, Pimpri, Pune 411018
            </p>

            <img src="https://acs.dypvp.edu.in/Assets/img/LogoERP.png" alt="College Logo" />
          </div>
        </div>

        <div className={style.loca}>
          <h1>Locate us</h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15202.570646263937!2d73.82272!3d18.621309!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b857cadcb92d%3A0x492821714b4205bd!2sDr.%20D.%20Y.%20Patil%20Arts%2C%20Commerce%20%26%20Science%20College!5e1!3m2!1sen!2sin!4v1741254690645!5m2!1sen!2sin"
            width="400"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default Footer;
