import React from "react";
import { Header, HeroSection, HomeFeatures } from "../components";

import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <Header />
      <HeroSection />
      <HomeFeatures />
    </div>
  );
};

export default Home; 
