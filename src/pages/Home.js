import React from "react";
import { Header, HeroSection } from "../components";

import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <Header />
      <div></div>
      <HeroSection />
    </div>
  );
};

export default Home;
