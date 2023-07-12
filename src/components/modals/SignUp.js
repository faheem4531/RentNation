import React from "react";

import styles from "./SignIn.module.css";
import Input from "../inputs/Input";
import LoginButton from "../buttons/LoginButton";
import OtherSignup from "../buttons/OtherSignup";

import Apple from "../../assets/svgs/apple-icon.svg";
import Google from "../../assets/svgs/google-icon.svg";
import Fb from "../../assets/svgs/fb-icon.svg";

const SignUp = ({ openAddressModal }) => {
  function handleOtherSignups() {}

  return (
    <div className={styles.signIn}>
      <div className={styles.inputs}>
        <Input label="Name*" type="text" placeholder="Enter your email" />
        <Input label="Email*" type="email" placeholder="Enter your password" />
        <Input
          label="Password*"
          type="password"
          placeholder="Create a password"
        />
      </div>
      <div className={styles.forgetContent}>
        <div>Must be at least 8 characters.</div>
      </div>
      <div className={styles.modalButton}>
        <LoginButton
          buttonText="Sign Up"
          fontSize="14px"
          borderColor="1px solid var(--border-dark-yellow1-color) "
          onClick={() => openAddressModal()}
        />
      </div>
      <div className={styles.signUpContent}>
        <div>Already Have an account</div>
        <a className={styles.signUp}>Login</a>
      </div>
      <div className={styles.oRLine}>
        <div className={styles.leftLine}></div>
        <div>OR</div>
        <div className={styles.rightLine}></div>
      </div>
      <div className={styles.socialMediaBtns}>
        <OtherSignup
          text={"Sign up with Google"}
          icon={Google}
          onClick={handleOtherSignups}
        />
        <OtherSignup
          text={"Sign up with Facebook"}
          icon={Fb}
          onClick={handleOtherSignups}
        />
        <OtherSignup
          text={"Sign up with Apple"}
          icon={Apple}
          onClick={handleOtherSignups}
        />
      </div>
    </div>
  );
};

export default SignUp;
