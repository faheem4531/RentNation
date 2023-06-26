import React from "react";
import HomeFeatures from "../components/homeFeatures/HomeFeatures";

import styles from "../styles/Home.module.css";
const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <HomeFeatures />
    </div>
  );
};

export default Home; 
