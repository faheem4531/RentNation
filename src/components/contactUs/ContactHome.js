import React from "react";
import styles from "./ContactHome.module.css";
import CardButton from "../buttons/CardButton";

import phone from "../../images/homepage/svgs/phone.svg";
import mail from "../../images/homepage/svgs/mail.svg";
import location from "../../images/homepage/svgs/location.svg";

import { Link } from "react-router-dom";

const ContactHome = () => {
  return (
    <div className="container">
      <div className={styles.ContactDetails}>
        <div className={styles.leftSec}>
          <div className={styles.title}>CONTACT US</div>
          <div className={styles.subHeading}>
            Contact us now if you have any question. Lorem ipsum dolor sit
            adipiscing elit.
          </div>
          <Link className="text-decoration-none" to={"/contact"}>
            <CardButton buttonText={"Contact Now"} />
          </Link>
        </div>
        <div className={styles.border}></div>
        <div className={styles.rightSec}>
          <a href="" className={styles.link}>
            <div className="d-flex mb-lg-5 mb-3">
              <img src={phone} alt="icon" />
              <div className="ms-3">+44 65748435748</div>
            </div>
          </a>
          <a href="" className={styles.link}>
            <div className="d-flex mb-lg-5 mb-3">
              <img src={mail} alt="icon" />
              <div className="ms-3">contact@rentnation.com</div>
            </div>
          </a>
          <a href="" className={styles.link}>
            <div className="d-flex">
              <img src={location} alt="icon" />
              <div className="ms-3">New York, NY</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactHome;
