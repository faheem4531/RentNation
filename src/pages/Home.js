import React from "react";
import { Header, HeroSection, HomeFeatures, ListingContainer } from "../components";

import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      {/* <Header /> */}
      {/* <HeroSection /> */}
      <HomeFeatures />
      <ListingContainer />
    </div>
  );
};

export default Home; 
