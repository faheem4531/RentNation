import React from "react";
import styles from "./Textarea.module.css";

const Textarea = (props) => {
  const textareaStyle = {
    height: props.height || "155px",
    borderRadius: props.borderRadius || "8px",
    backgroundColor: props.backgroundColor,
  };
  return (
    <div>
      <div className={styles.lableMain}>
        <label className={styles.lable} htmlFor="textArea">
          {props.lable}
        </label>
        <div>
          <img src={props.labelIcon} alt="" htmlFor="textArea" />
        </div>
      </div>
      <textarea
        className={styles.textarea}
        placeholder={props.placeholder}
        style={textareaStyle}
        id="textArea"
      ></textarea>
    </div>
  );
};

export default Textarea;