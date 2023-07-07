import React from "react";
import styles from "./Contact.module.css";
import { Header, Footer } from "../../components";
import Input from "../../components/inputs/Input";
import Textarea from "../../components/textarea/Textarea";
import LoginButton from "../../components/buttons/LoginButton";

import bgRight from "../../assets/pngs/bg-rightHalf.png";

const Contact = () => {
  return (
    <div>
      <Header
        Login={false} />
      <div className={styles.contactMain}>
        <div className={styles.contactFormMain}>
          <div className={styles.contactFormHeading}>Contact Us</div>
          <Input
            lable="Name*"
            type="text"
            placeholder="EX:Mark odama"
            backgroundColor="#2B2B2B"
          />
          <div className="mt-4">
            <Input
              lable="Email*"
              type="text"
              placeholder="EX:Markoadama@gmail.com"
              backgroundColor="#2B2B2B"
            />
          </div>
          <div className="mt-4">
            <Input
              lable="Subject*"
              type="text"
              placeholder="EX:project complain"
              backgroundColor="#2B2B2B"
            />
          </div>
          <div className="mt-4">
            <Textarea
              lable="About*"
              placeholder={"About"}
              height={"150px"}
              backgroundColor={"#2B2B2B"}
            />
          </div>
          <div className={styles.contactFormBtn}>
            <LoginButton buttonText="Submit" borderRadius="8px" width="90%" />
          </div>
        </div>
      </div>

      <div className={styles.contactFooter}>
        <Footer />
        <div className={styles.contactBgRight}>
          <img src={bgRight} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
