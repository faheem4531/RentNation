import React from "react";

import styles from './Oto.module.css';
import LoginButton from "../buttons/LoginButton";

const Oto = () => {
  function moveBack() { }
  function OtoConfirm() { }

  return (
    <div className={styles.Oto}>
      <div className={styles.BtnDiv}>
        <LoginButton
          buttonText="Back"
          fontSize="16px"
          borderColor='1px solid var(--border-light-grey1-color) '
          backgroundColor='var(--white-color)'
          onClick={moveBack}
        />
        <LoginButton
          buttonText="Confirm"
          fontSize="16px"
          borderColor='1px solid var(--border-dark-yellow1-color) '
          onClick={OtoConfirm}
        />
      </div>
    </div>
  );
};

export default Oto;