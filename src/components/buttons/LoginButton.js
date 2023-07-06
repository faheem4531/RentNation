import React from "react";

import styles from "./LoginButton.module.css";

const LoginButton = ({ borderRadius = '4px', borderColor = 'none', fontSize, buttonText, onClick, backgroundColor = 'var(--yellow1-color)' }) => {
  const inputStyle = {
    borderRadius: borderRadius || '4px',
    border: borderColor || 'none',
    fontSize: fontSize,
    backgroundColor: backgroundColor,
  };

  return <button
    className={styles.button}
    style={inputStyle}
    onClick={onClick}
  >{buttonText}</button>
}

export default LoginButton;
