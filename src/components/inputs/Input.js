import React from "react";
import styles from "./Input.module.css";

const Input = ({
  label,
  type,
  placeholder,
  borderRadius,
  backgroundColor,
  mbLabel,
  padding,
  lableFont,
  inputFont,
  name,
  formik,
  setValue,
}) => {
  const inputStyle = {
    borderRadius: borderRadius || "8px",
    backgroundColor: backgroundColor,
    padding: padding,
    fontSize: inputFont,
  };
  const labelStyle = {
    marginBottom: mbLabel,
    fontSize: lableFont,
  };
  return (
    <div className={styles.inputDiv}>
      <label className={styles.lable} style={labelStyle} htmlFor="name">
        {label}
      </label>
      <input
        className={styles.input}
        id="name"
        type={type}
        name={name}
        placeholder={placeholder}
        style={inputStyle}
        value={formik?.values?.[name]}
        onChange={(event) => {
          if (formik) {
            formik.setFieldValue(name, event.target.value);
          }
          // setValue(event.target.value);
        }}
        onBlur={formik?.handleBlur}
      />
      {formik?.touched?.[name] && formik?.errors?.[name] && (
        <span className={styles.errorMessage}>{formik?.errors?.[name]}</span>
      )}
    </div>
  );
};

export default Input;
