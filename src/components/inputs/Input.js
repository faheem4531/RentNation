import React from "react";
import styles from "./Input.module.css";

const Input = (props) => {
  const inputStyle = {
    borderRadius: props.borderRadius || "8px",
    backgroundColor: props.backgroundColor,
  };
  return (
    <div className={styles.inputDiv}>
      <label className={styles.lable} htmlFor="name">
        {props.lable}
      </label>
      <input
        className={styles.input}
        id="name"
        type={props.type}
        placeholder={props.placeholder}
        style={inputStyle}
      />
    </div>
  );
};

export default Input;
