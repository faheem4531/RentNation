import React from "react";
import { Header, HeroSection, HomeFeatures, ServicesContainer, ContactHome, Footer } from "../components";

import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <Header
        Login={false} />
      <HeroSection />
      <HomeFeatures />
      <ServicesContainer />
      <ContactHome />
      <Footer />
    </div>
  );
};

export default Home;
