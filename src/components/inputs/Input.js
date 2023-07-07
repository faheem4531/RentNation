import React from "react";
import styles from "./Input.module.css";


const Input = ({ label, type, placeholder, borderRadius, backgroundColor, mbLabel, padding, lableFont, inputFont }) => {

  const inputStyle = {
    borderRadius: borderRadius || '8px',
    backgroundColor: backgroundColor,
    padding: padding,
    fontSize: inputFont
  };
  const labelStyle = {
    marginBottom: mbLabel,
    fontSize: lableFont
  };
  return (
    <div className={styles.inputDiv}>
      <label className={styles.lable} style={labelStyle} htmlFor="name">{label}</label>
      <input
        className={styles.input}
        id="name"
        type={type}
        placeholder={placeholder}
        style={inputStyle}
      />
    </div>
  );
};

export default Input;
