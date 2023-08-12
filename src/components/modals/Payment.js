import React from "react";

import styles from "./Payment.module.css";
import LoginButton from "../buttons/LoginButton";
import OtherSignup from "../buttons/OtherSignup";

import paypal from "../../assets/pngs/payPalLogo.png";
import pay from "../../assets/svgs/payment-icon.svg";

const Payment = ({ openPaymentDetailsMod }) => {
  return (
    <div className={styles.payment}>
      <div className={styles.BtnDiv}>
        <div className={styles.socialMediaBtns}>
          <OtherSignup
            text={"Debit/Credit Pay"}
            icon={pay}
            onClick={() => {}}
            padding="6px 0px"
          />
          <OtherSignup text={"Paypal"} icon={paypal} onClick={() => {}} />
        </div>
      </div>
      <div className="mt-5">
        <LoginButton
          buttonText="Confirm"
          fontSize="14px"
          borderColor="1px solid var(--border-dark-yellow1-color)"
          onClick={() => openPaymentDetailsMod()}
        />
      </div>
    </div>
  );
};

export default Payment;
