import React from "react";

import styles from './UpdatePasward.module.css';
import Input from '../inputs/Input';

const UpdatePasward = () => {
  return (
    <div className={styles.UpdatePasward}>
      <Input
        label='Password*'
        type='email'
        placeholder='Enter your password'
      />
      <Input
        label='Confirm Password*'
        type='email'
        placeholder='Enter your password'
      />
    </div>
  );
};

export default UpdatePasward;