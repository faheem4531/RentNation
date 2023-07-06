import React from "react";
import Styles from './OtherSignup.module.css';

const OtherSignup = ({ text, icon, onClick, padding }) => {
  const inputStyle = {
    padding: padding
  };
  return <button onClick={onClick} className={Styles.button} style={inputStyle}>
    <img className={Styles.icon} src={icon} />
    {text}
  </button>
}

export default OtherSignup;