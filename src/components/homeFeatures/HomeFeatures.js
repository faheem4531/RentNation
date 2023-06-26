import React from "react";
import CardsContainer from "../cardsContainer/CardsContainer";

import styles from './HomeFeatures.module.css';

const HomeFeatures = () => {
  return (
    <div className={styles.featuresParent}>
      <CardsContainer featureTitle={'Golf Cart'} />
    </div>
  )
}

export default HomeFeatures;