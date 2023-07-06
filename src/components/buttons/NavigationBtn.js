import React from "react";
import styles from "./NavigationBtn.module.css";

const CardButton = (props) => {
  return (
    <button onClick={props.onViewDetails} className={styles.button}>
      <div>{props.buttonText}</div>
      <div>
        <img src={props.img} alt="" />
      </div>
    </button>
  );
};

export default CardButton;
