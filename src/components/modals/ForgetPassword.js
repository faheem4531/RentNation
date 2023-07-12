import React from "react";

import styles from "./ForgetPassword.module.css";
import Input from "../inputs/Input";
import LoginButton from "../buttons/LoginButton";

const ForgetPassword = ({ openOTPModal }) => {
  return (
    <div>
      <div className={styles.ForgetPassword}>
        <Input label="Email*" type="email" placeholder="Enter your email" />
      </div>
      <div className="mt-5">
        <LoginButton
          buttonText="Confirm"
          fontSize="14px"
          borderColor="1px solid var(--border-dark-yellow1-color)"
          onClick={() => openOTPModal()}
        />
      </div>
    </div>
  );
};

export default ForgetPassword;
