import React from "react";

import styles from "./PaymentDetails.module.css";
import Input from "../inputs/Input";
import LoginButton from "../buttons/LoginButton";

const PaymentDetails = () => {
  return (
    <div>
      <div className={styles.PaymentDetails}>
        <Input
          label="Card holder name*"
          type="text"
          placeholder="Enter card holder name"
        />
        <Input label="Card No" type="number" placeholder="Enter card number" />
        <Input label="CVC" type="number" placeholder="Enter CVC" />
        <Input
          label="Card expiry date*"
          type="number"
          placeholder="Enter Card expiry date "
        />
      </div>
      <div className="mt-5">
        <LoginButton
          buttonText="Pay"
          fontSize="14px"
          borderColor="1px solid var(--border-dark-yellow1-color)"
        />
      </div>
    </div>
  );
};

export default PaymentDetails;
