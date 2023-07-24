import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Header,
  HeroSection,
  HomeFeatures,
  ServicesContainer,
  ContactHome,
  Footer,
} from "../components";

import styles from "../styles/Home.module.css";
import { getHomeData } from "../store/thunk/HomeThunk";

const Home = () => {
  const dispatch = useDispatch();

  const category = useSelector((state) => state.home.category);

  useEffect(() => {
    dispatch(getHomeData());
  }, []);

  return (
    <div className={styles.homeContainer}>
      <Header Login={false} selectedNav="HOME" />
      <HeroSection />
      <HomeFeatures category={category} />
      <ServicesContainer category={category} />
      <ContactHome />
      <Footer />
    </div>
  );
};

export default Home;
