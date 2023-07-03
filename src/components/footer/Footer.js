import React from "react";
import styles from "./Footer.module.css";

import FacebookIcon from "../../images/homepage/footerSectionImg/facebook.png";
import TwitterIcon from "../../images/homepage/footerSectionImg/twitter.png";
import InstaIcon from "../../images/homepage/footerSectionImg/insta.png";
import logo from "../../images/homepage/svgs/logo.svg";

const Footer = () => {
  return (
    <div className={styles.footerMain}>
      <div className="container">
        <div className="footer-top">
          <div className="row">
            <div className="col-lg-3 col-md-7 col-xs-9 mb-5 mb-lg-0">
              <div className={styles.footerLogoMain}>
                <div className={styles.footerLogo}>
                  <a href="#">
                    <img className="w-100" src={logo} alt="" />
                  </a>
                </div>
                <div className={styles.footerDiscription}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  viverra efficitur convallis. Mauris non hendrerit nulla.
                </div>
              </div>
            </div>
            <div className={`col-lg-9 ${styles.footerMainList}`}>
              <div className="row">
                <div className="col-md-3 col-xs-6">
                  <div className={styles.footerMainListCon}>
                    <h4 className={styles.footerTitle}>Quick Links</h4>
                    <ul className={styles.footerList}>
                      <li>
                        <a href="about.html">Cars for rent</a>
                      </li>
                      <li>
                        <a href="portfolio.html">Beach for rent</a>
                      </li>
                      <li>
                        <a href="contact.html">Kayaks for rent</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-3  col-xs-6">
                  <div className={styles.footerMainListCon}>
                    <h4 className={styles.footerTitle}>Menehariya</h4>
                    <ul className={styles.footerList}>
                      <li>
                        <a href="contact.html">Contact Us</a>
                      </li>
                      <li>
                        <a href="about.html">About us</a>
                      </li>
                      <li>
                        <a href="portfolio.html">Terms & Condition </a>
                      </li>

                      <li>
                        <a href="ServicesScreen.html"> Privacy Policy</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-3  col-xs-6">
                  <div className={styles.footerMainListCon}>
                    <h4 className={styles.footerTitle}>Trending Search</h4>
                    <ul className={styles.footerList}>
                      <li>
                        <a href="about.html">About us</a>
                      </li>
                      <li>
                        <a href="portfolio.html">Portfolios</a>
                      </li>
                      <li>
                        <a href="contact.html">Contact</a>
                      </li>
                      <li>
                        <a href="ServicesScreen.html">Services</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-3 col-xs-6">
                  <div>
                    <h4 className={styles.footerTitle}>Social MEDIA</h4>
                  </div>
                  <div className={styles.footerTecMain}>
                    <div className={styles.footerTec}>
                      <img src={FacebookIcon} alt="" />
                    </div>
                    <div className={styles.footerTec}>
                      <img src={TwitterIcon} alt="" />
                    </div>
                    <div className={styles.footerTec}>
                      <img src={InstaIcon} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={` text-center ${styles.copyright}`}>
              <p className="mb-0">© Rentnation2023</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
