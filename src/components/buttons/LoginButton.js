import React from "react";

import styles from './LoginButton.module.css';

const LoginButton = (props) => {
  return <button className={styles.button}>{props.buttonText}</button>
}

export default LoginButton;