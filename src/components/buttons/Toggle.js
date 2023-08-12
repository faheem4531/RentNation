import React from "react";
import styles from './Toggle.module.css';

const Toggle = ({ heading }) => {
  return (
    <div className={styles.toggleMain}>
      <div className={styles.toggleHeading}>{heading}</div>
      <label className={styles.switch}>
        <input type="checkbox" checked />
        <span className={`${styles.slider} ${styles.round}`}></span>
      </label>
    </div>
  )
}

export default Toggle;
