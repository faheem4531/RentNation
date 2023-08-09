import React from "react";
import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={`${styles.spinnerColor} spinner-border`} role="status">
      <span className="visually-hidden"></span>
    </div>
  );
};

export default Loader;
