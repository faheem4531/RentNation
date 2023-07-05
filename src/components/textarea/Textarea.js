import React from "react";
import styles from "./Textarea.module.css";

const Textarea = (props) => {
  const textareaStyle = {
    height: props.height || "155px",
    backgroundColor: props.backgroundColor,
  };
  return (
    <div>
      <label className={styles.lable} htmlFor="name">
        {props.lable}
      </label>
      <textarea
        className={styles.textarea}
        placeholder={props.placeholder}
        style={textareaStyle}
      ></textarea>
    </div>
  );
};

export default Textarea;
