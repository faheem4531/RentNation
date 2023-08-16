import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./FeatureCardsContainer.module.css";
import FeaturesCard from "../cards/FeaturesCard";

const FeatureCardsContainer = (props) => {
  const navigation = useNavigate();

  function navigateToPreviewPage(item) {
    navigation(`/ListingPreview/${item?.id}`);
  }
  return (
    <div>
      <div className="container">
        <div className={styles.featureTitle}>
          Featured {props.featureTitle} for Rent
        </div>
        <div className={styles.cardContainer}>
          {props?.cardData?.map((item) => (
            <FeaturesCard
              key={item.id}
              heading={item.name}
              subHeading={item.description}
              location={"Pakistan"}
              price={item.pricePerDay}
              views={item.viewCounter}
              tag={"Featured"}
              onShare={() => {}}
              onViewDetails={navigateToPreviewPage}
              image={item.images}
              item={item}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureCardsContainer;
