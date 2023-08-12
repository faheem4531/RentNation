import React from "react";
import styles from "./HeroInput.module.css";
import seacrhIcon from "../../images/homepage/searchIcon.png";
import locationIcon from "../../assets/svgs/location.svg";

const HeroInput = () => {
  return (
    <div>
      <div className={styles.heroInputDropMain}>
        <div className={styles.heroInputDropCon}>
          <img className={styles.heroInputDropIcon} src={locationIcon} alt="" />
          <select
            className={styles.heroInputDrop}
            aria-label="Default select example"
          >
            <option selected>LOCATION</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>

        <input
          type="text"
          className={styles.heroInput}
          placeholder="Find beach, kayaks and cars"
        />
        <button className={styles.heroInputBtn}>
          <span>
            <img src={seacrhIcon} alt="" className={styles.heroSearchIcon} />
          </span>
          SEARCH
        </button>
      </div>
    </div>
  );
};

export default HeroInput;
