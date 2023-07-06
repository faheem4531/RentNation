import React from "react";

import styles from './SignIn.module.css';
import Input from '../inputs/Input';
import LoginButton from "../buttons/LoginButton";
import OtherSignup from "../buttons/OtherSignup";

import Apple from '../../assets/svgs/apple-icon.svg';
import Google from '../../assets/svgs/google-icon.svg';
import Fb from '../../assets/svgs/fb-icon.svg';

const SignIn = () => {
  function handleSigninBtn() {

  }

  function handleOtherSignups() {

  }

  return (
    <div className={styles.signIn}>
      <div className={styles.inputs}>
        <Input
          label='Email*'
          type='email'
          placeholder='Enter your email'
        />
        <Input
          label='Password*'
          type='password'
          placeholder='Enter your password'
        />
      </div>
      <div className={styles.forgetContent}>
        <div>
          Must be at least 8 characters.
        </div>
        <a className={styles.forgetPass}>Forgot Password?</a>
      </div>
      <div className={styles.modalButton}>
        <LoginButton
          buttonText="SignIn"
          fontSize="14px"
          borderColor='1px solid var(--border-dark-yellow1-color) '
          onClick={handleSigninBtn}
        />
      </div>
      <div className={styles.signUpContent}>
        <div>
          New to Rentnation?
        </div>
        <a className={styles.signUp}>Sign Up</a>
      </div>
      <div className={styles.oRLine}>
        <div className={styles.leftLine}></div>
        <div>OR</div>
        <div className={styles.rightLine}></div>
      </div>
      <div className={styles.socialMediaBtns}>
        <OtherSignup
          text={'Sign up with Google'}
          icon={Google}
          onClick={handleOtherSignups} />
        <OtherSignup
          text={'Sign up with Facebook'}
          icon={Fb}
          onClick={handleOtherSignups} />
        <OtherSignup
          text={'Sign up with Apple'}
          icon={Apple}
          onClick={handleOtherSignups} />
      </div>
    </div>
  );
};

export default SignIn;