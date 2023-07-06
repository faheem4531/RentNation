import React from "react";

import styles from './ForgetPassword.module.css';
import Input from '../inputs/Input';

const ForgetPassword = () => {
  return (
    <div className={styles.ForgetPassword}>
      <Input
        label='Email*'
        type='email'
        placeholder='Enter your email'
      />
    </div>
  );
};

export default ForgetPassword;