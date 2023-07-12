import React from "react";

import styles from "./UpdatePasward.module.css";
import Input from "../inputs/Input";
import LoginButton from "../buttons/LoginButton";

const UpdatePasward = () => {
  return (
    <div>
      <div className={styles.UpdatePasward}>
        <Input
          label="Password*"
          type="email"
          placeholder="Enter your password"
        />
        <Input
          label="Confirm Password*"
          type="email"
          placeholder="Enter your password"
        />
      </div>
      <div className="mt-5">
        <LoginButton
          buttonText="Update Password"
          fontSize="14px"
          borderColor="1px solid var(--border-dark-yellow1-color)"
          // onClick={() => openOTPModal()}
        />
      </div>
    </div>
  );
};

export default UpdatePasward;
