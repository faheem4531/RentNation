import React from "react";
import styles from "./Input.module.css";


const Input = ({ label, type, placeholder, borderRadius, backgroundColor, mbLabel, padding }) => {

  const inputStyle = {
    borderRadius: borderRadius || '8px',
    backgroundColor: backgroundColor,
    padding: padding
  };
  const labelStyle = {
    marginBottom: mbLabel,
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
