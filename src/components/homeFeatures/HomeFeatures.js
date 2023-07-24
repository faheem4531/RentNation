import React from "react";

import FeatureCardsContainer from "../featureCardsContainer/FeatureCardsContainer";
import styles from "./HomeFeatures.module.css";

import bgLeft from "../../images/homepage/bg-leftHalf.png";
import bgRight from "../../images/homepage/bg-rightHalf.png";

const HomeFeatures = ({ category }) => {
  return (
    <div className={styles.featuresParent}>
      <img className={styles.circleLeft} src={bgLeft} alt="img" />
      <img className={styles.circleRight} src={bgRight} alt="img" />
      {category?.map(
        (cat) =>
          cat.products.length > 0 && (
            <FeatureCardsContainer
              key={cat.id} // Add a unique key for each FeatureCardsContainer
              cardData={cat.products}
              featureTitle={cat.name}
            />
          )
      )}
    </div>
  );
};

export default HomeFeatures;
