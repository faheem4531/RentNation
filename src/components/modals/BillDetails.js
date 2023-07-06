import React from "react";

import styles from './BillDetails.module.css';
import Input from '../inputs/Input';
import LoginButton from "../buttons/LoginButton";

const BillDetails = ({ total, subTotal, vat }) => {
  return (
    <div className={styles.billDetails}>
      <div className={styles.billContent}>
        <div className={`${styles.total} ${styles.totalColor}`}>
          <span>Total </span>
          <span>${total}</span>
        </div>
        <div className={styles.total}>
          <span>Sub Total </span>
          <span>${subTotal}</span>
        </div>
        <div className={styles.total}>
          <span>Vat </span>
          <span>${vat}</span>
        </div>
      </div>
      <Input
        label='Add Address*'
        type='text'
        placeholder='Add your Address where you want deliver items'
      />
      <div className={styles.bookBtn}>
        <LoginButton
          buttonText="Book Now"
          fontSize="16px"
          borderColor='1px solid var(--border-dark-yellow1-color) '
          onClick={() => { }}
        />
      </div>
    </div>
  );
};

export default BillDetails;