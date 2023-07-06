import React from "react";

import styles from './AddressModal.module.css';
import Input from '../inputs/Input';

const AddressModal = () => {
  return (
    <div className={styles.AddressModal}>
      <Input
        label='Country*'
        type='text'
        placeholder='Enter your country'
      />
      <Input
        label='City*'
        type='text'
        placeholder='Enter your City'
      />
      <Input
        label='State*'
        type='text'
        placeholder='Enter your State'
      />
    </div>
  );
};

export default AddressModal;