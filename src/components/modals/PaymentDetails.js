import React from "react";

import styles from './PaymentDetails.module.css';
import Input from '../inputs/Input';

const PaymentDetails = () => {
  return (
    <div className={styles.PaymentDetails}>
      <Input
        label='Card holder name*'
        type='text'
        placeholder='Enter card holder name'
      />
      <Input
        label='Card No'
        type='number'
        placeholder='Enter card number'
      />
      <Input
        label='CVC'
        type='number'
        placeholder='Enter CVC'
      />
      <Input
        label='Card expiry date*'
        type='number'
        placeholder='Enter Card expiry date '
      />
    </div>
  );
};

export default PaymentDetails;