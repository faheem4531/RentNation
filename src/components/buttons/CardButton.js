import React from "react";
import Styles from "./CardButton.module.css";

const CardButton = ({ onViewDetails, img, buttonText, borderColor, radius, color, padding, mrIcon, bgColor, width }) => {
  const style = {
    borderColor: borderColor,
    borderRadius: radius,
    color: color,
    padding: padding,
    backgroundColor: bgColor,
    width: width
  }
  const iconStyle = {
    marginRight: mrIcon
  }
  return (
    <button style={style} onClick={onViewDetails} className={Styles.button}>
      <img style={iconStyle} src={img} alt="" />
      {buttonText}
    </button>
  );
};

export default CardButton;
