import React from "react";
import { Header, HeroSection, HomeFeatures, Footer } from "../components";

import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <Header />
      <HeroSection />
      <HomeFeatures />
      <Footer />
    </div>
  );
};

export default Home;
