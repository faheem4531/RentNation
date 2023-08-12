import React from "react";
import styles from "./Textarea.module.css";

const Textarea = (props) => {
  const textareaStyle = {
    height: props.height || "155px",
    borderRadius: props.borderRadius || "8px",
    backgroundColor: props.backgroundColor,
    fontSize: props.inputFont,
  };

  const labelStyle = {
    marginBottom: props.mbLabel,
    fontSize: props.lableFont,
  };

  return (
    <div>
      <div className={styles.lableMain}>
        <label style={labelStyle} className={styles.lable} htmlFor="textArea">
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
        disabled={props.disabled}
        id="name"
        name={props.name}
        value={props.formik ? props.formik.values[props.name] : props.value}
        onChange={(event) => {
          if (props.formik) {
            props.formik.setFieldValue(props.name, event.target.value);
            // props.setValue(event.target.value);
          }
        }}
        onBlur={props.formik && props.formik.handleBlur}></textarea>
      {props.formik &&
        props.formik.touched[props.name] &&
        props.formik.errors[props.name] && (
          <span className={styles.errorMessage}>
            {props.formik.errors[props.name]}
          </span>
        )}
    </div>
  );
};

export default Textarea;
