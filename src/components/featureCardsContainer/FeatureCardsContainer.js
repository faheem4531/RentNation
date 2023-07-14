import React from "react";

import styles from "./FeatureCardsContainer.module.css";
import FeaturesCard from "../cards/FeaturesCard";

const FeatureCardsContainer = (props) => {
  return (
    <div>
      <div className="container">
        <div className={styles.featureTitle}>
          Featured {props.featureTitle} for Rent
        </div>
        <div className={styles.cardContainer}>
          {props.cardData.map((item) => (
            <FeaturesCard
              key={item.id}
              heading={item.heading}
              subHeading={item.subHeading}
              location={item.location}
              price={item.price}
              views={item.views}
              tag={item.tag}
              onShare={() => {}}
              onViewDetails={() => {}}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureCardsContainer;
