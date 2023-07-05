import React from "react";

import styles from "./LoginButton.module.css";

const LoginButton = (props) => {
  const inputStyle = {
    borderRadius: props.borderRadius || "4px",
    border: props.borderColor || "none",
    fontSize: props.fontSize,
    width: props.width,
  };

  return (
    <button className={styles.button} style={inputStyle}>
      {props.buttonText}
    </button>
  );
};

export default LoginButton;
