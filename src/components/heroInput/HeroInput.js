import React from "react";
import styles from "./HeroInput.module.css";
import seacrhIcon from "../../images/homepage/searchIcon.png";

const HeroInput = () => {
  return (
    <div>
      <div className="d-flex justify-content-center">
        <div className=" w-auto">
          <select
            className={styles.heroInputDrop}
            aria-label="Default select example"
          >
            <option selected>LOCATION</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <input
            type="text"
            className={styles.heroInput}
            placeholder="Find beach, kayaks and cars"
          />
          {/* <LoginButton buttonText={"SEARCH"} /> */}
          <button className={styles.heroInputBtn}>
            <span>
              <img src={seacrhIcon} alt="" className={styles.heroSearchIcon} />
            </span>
            SEARCH
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroInput;
