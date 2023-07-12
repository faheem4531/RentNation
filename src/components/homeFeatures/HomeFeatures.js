import React from "react";
import FeatureCardsContainer from "../featureCardsContainer/FeatureCardsContainer";
import styles from "./HomeFeatures.module.css";

import golf1 from "../../images/homepage/golfCar-img1.png";
import golf2 from "../../images/homepage/golfCar-img2.png";
import golf3 from "../../images/homepage/golfCar-img3.png";
import beach1 from "../../images/homepage/beach-img1.png";
import beach2 from "../../images/homepage/beach-img2.png";
import beach3 from "../../images/homepage/beach-img3.png";
import beach4 from "../../images/homepage/beach-img4.png";
import kayaks1 from "../../images/homepage/kayaks-img1.png";
import kayaks2 from "../../images/homepage/kayaks-img2.png";
import kayaks3 from "../../images/homepage/kayaks-img3.png";
import kayaks4 from "../../images/homepage/kayaks-img4.png";

import bgLeft from "../../images/homepage/bg-leftHalf.png";
import bgRight from "../../images/homepage/bg-rightHalf.png";

const HomeFeatures = () => {
  const golfCardsData = [
    {
      id: "gc1",
      heading: "Golf Cart",
      subHeading: "Lorem ipsum dolor sit amet consectetur. Consequat tincidunt",
      location: "Turkis",
      price: "50",
      views: "569",
      image: golf1,
      tag: "FEATURED",
      onShare: () => {},
      onViewDetails: () => {},
    },
    {
      id: "gc2",
      heading: "Golf Cart",
      subHeading: "Lorem ipsum dolor sit amet consectetur. Consequat tincidunt",
      location: "Turkis",
      price: "50",
      views: "569",
      image: golf2,
      tag: "FEATURED",
      onShare: () => {},
      onViewDetails: () => {},
    },
    {
      id: "gc3",
      heading: "Golf Cart",
      subHeading: "Lorem ipsum dolor sit amet consectetur. Consequat tincidunt",
      location: "Turkis",
      price: "50",
      views: "569",
      image: golf3,
      tag: "FEATURED",
      onShare: () => {},
      onViewDetails: () => {},
    },
    {
      id: "gc4",
      heading: "Golf Cart",
      subHeading: "Lorem ipsum dolor sit amet consectetur. Consequat tincidunt",
      location: "Turkis",
      price: "50",
      views: "569",
      image: golf1,
      tag: "FEATURED",
      onShare: () => {},
      onViewDetails: () => {},
    },
    {
      id: "gc5",
      heading: "Golf Cart",
      subHeading: "Lorem ipsum dolor sit amet consectetur. Consequat tincidunt",
      location: "Turkis",
      price: "50",
      views: "569",
      image: golf2,
      tag: "FEATURED",
      onShare: () => {},
      onViewDetails: () => {},
    },
    {
      id: "gc6",
      heading: "Golf Cart",
      subHeading: "Lorem ipsum dolor sit amet consectetur. Consequat tincidunt",
      location: "Turkis",
      price: "50",
      views: "569",
      image: golf3,
      tag: "FEATURED",
      onShare: () => {},
      onViewDetails: () => {},
    },
  ];
  const beachCardsData = [
    {
      id: "bc1",
      heading: "Dreamy beaches",
      subHeading: "The beach is a stunning natural landscape",
      location: "Turkis",
      price: "50",
      views: "569",
      image: beach1,
      tag: "FEATURED",
      onShare: () => {},
      onViewDetails: () => {},
    },
    {
      id: "bc2",
      heading: "Dreamy beaches",
      subHeading: "The beach is a stunning natural landscape",
      location: "Turkis",
      price: "50",
      views: "569",
      image: beach2,
      tag: "FEATURED",
      onShare: () => {},
      onViewDetails: () => {},
    },
    {
      id: "bc3",
      heading: "Dreamy beaches",
      subHeading: "The beach is a stunning natural landscape",
      location: "Turkis",
      price: "50",
      views: "569",
      image: beach3,
      tag: "FEATURED",
      onShare: () => {},
      onViewDetails: () => {},
    },
    {
      id: "bc4",
      heading: "Dreamy beaches",
      subHeading: "The beach is a stunning natural landscape",
      location: "Turkis",
      price: "50",
      views: "569",
      image: beach4,
      tag: "FEATURED",
      onShare: () => {},
      onViewDetails: () => {},
    },
    {
      id: "bc5",
      heading: "Dreamy beaches",
      subHeading: "The beach is a stunning natural landscape",
      location: "Turkis",
      price: "50",
      views: "569",
      image: beach1,
      tag: "FEATURED",
      onShare: () => {},
      onViewDetails: () => {},
    },
    {
      id: "bc6",
      heading: "Dreamy beaches",
      subHeading: "The beach is a stunning natural landscape",
      location: "Turkis",
      price: "50",
      views: "569",
      image: beach2,
      tag: "FEATURED",
      onShare: () => {},
      onViewDetails: () => {},
    },
  ];
  const KayaksCardsData = [
    {
      id: "kc1",
      heading: "Kayaks",
      subHeading: "Lorem ipsum dolor sit amet consectetur. Consequat tincidunt",
      location: "Turkis",
      price: "50",
      views: "569",
      image: kayaks1,
      tag: "FEATURED",
      onShare: () => {},
      onViewDetails: () => {},
    },
    {
      id: "kc2",
      heading: "Kayaks",
      subHeading: "Lorem ipsum dolor sit amet consectetur. Consequat tincidunt",
      location: "Turkis",
      price: "50",
      views: "569",
      image: kayaks2,
      tag: "FEATURED",
      onShare: () => {},
      onViewDetails: () => {},
    },
    {
      id: "kc3",
      heading: "Kayaks",
      subHeading: "Lorem ipsum dolor sit amet consectetur. Consequat tincidunt",
      location: "Turkis",
      price: "50",
      views: "569",
      image: kayaks3,
      tag: "FEATURED",
      onShare: () => {},
      onViewDetails: () => {},
    },
    {
      id: "kc4",
      heading: "Kayaks",
      subHeading: "Lorem ipsum dolor sit amet consectetur. Consequat tincidunt",
      location: "Turkis",
      price: "50",
      views: "569",
      image: kayaks4,
      tag: "FEATURED",
      onShare: () => {},
      onViewDetails: () => {},
    },
    {
      id: "kc5",
      heading: "Kayaks",
      subHeading: "Lorem ipsum dolor sit amet consectetur. Consequat tincidunt",
      location: "Turkis",
      price: "50",
      views: "569",
      image: kayaks1,
      tag: "FEATURED",
      onShare: () => {},
      onViewDetails: () => {},
    },
    {
      id: "kc6",
      heading: "Kayaks",
      subHeading: "Lorem ipsum dolor sit amet consectetur. Consequat tincidunt",
      location: "Turkis",
      price: "50",
      views: "569",
      image: kayaks2,
      tag: "FEATURED",
      onShare: () => {},
      onViewDetails: () => {},
    },
  ];
  return (
    <div className={styles.featuresParent}>
      <img className={styles.circleLeft} src={bgLeft} />
      <img className={styles.circleRight} src={bgRight} />

      <FeatureCardsContainer
        cardData={golfCardsData}
        featureTitle={"Golf Cart"}
      />
      <FeatureCardsContainer
        cardData={beachCardsData}
        featureTitle={"beach Supplies"}
      />
      <FeatureCardsContainer
        cardData={KayaksCardsData}
        featureTitle={"Kayaks "}
      />
      <FeatureCardsContainer
        cardData={golfCardsData}
        featureTitle={"Golf Cart"}
      />
    </div>
  );
};

export default HomeFeatures;
