import React from "react";

import styles from './Payment.module.css';
import LoginButton from "../buttons/LoginButton";
import OtherSignup from "../buttons/OtherSignup";

import Apple from '../../assets/svgs/apple-icon.svg';
import Google from '../../assets/svgs/google-icon.svg';
import pay from '../../assets/svgs/payment-icon.svg';

const Payment = () => {

  return (
    <div className={styles.payment}>
      <div className={styles.BtnDiv}>
        <div className={styles.socialMediaBtns}>
          <OtherSignup
            text={'Debit/Credit Pay'}
            icon={pay}
            onClick={() => { }}
            padding='6px 0px' />
          <OtherSignup
            text={'Google pay'}
            icon={Google}
            onClick={() => { }} />
          <OtherSignup
            text={'Apple pay'}
            icon={Apple}
            onClick={() => { }} />
        </div>
      </div>
    </div>
  );
};

export default Payment;