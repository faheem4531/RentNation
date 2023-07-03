import React from "react";
import Styles from './CardButton.module.css';

const CardButton = (props) => {
  return <button onClick={props.onViewDetails} className={Styles.button}>{props.buttonText}</button>
}

export default CardButton;