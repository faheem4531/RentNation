import React from "react";

import styles from "./Address.module.css";
import Input from "../inputs/Input";
import LoginButton from "../buttons/LoginButton";

const AddressModal = () => {
  return (
    <div>
      <div className={styles.AddressModal}>
        <Input label="Country*" type="text" placeholder="Enter your country" />
        <Input label="City*" type="text" placeholder="Enter your City" />
        <Input label="State*" type="text" placeholder="Enter your State" />
      </div>
      <div className="mt-5">
        <LoginButton
          buttonText="Continue"
          fontSize="14px"
          borderColor="1px solid var(--border-dark-yellow1-color)"
        />
      </div>
    </div>
  );
};

export default AddressModal;
