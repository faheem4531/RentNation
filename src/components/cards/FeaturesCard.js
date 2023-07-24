import React from "react";
import CardButton from "../buttons/CardButton";

import styles from "./FeaturesCard.module.css";
import eye from "../../images/homepage/svgs/eye.svg";
import locationPin from "../../images/homepage/svgs/location.svg";
import share from "../../images/homepage/svgs/share.svg";
import heart from "../../images/homepage/svgs/favourties.svg";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const FeaturesCard = ({
  tag,
  heading,
  subHeading,
  location,
  price,
  views,
  onShare,
  onViewDetails,
  image,
  item,
}) => {
  console.log("images", image);
  const cardImgSlider = (
    <Carousel
      className={styles.listingSliderMain}
      showArrows={false}
      showStatus={false}
      showThumbs={false}>
      {image?.map((img) => {
        return (
          <>
            <div className={styles.listingSliderImgMAin}>
              <img className={styles.listingSliderImges} src={img} alt="img" />
            </div>
          </>
        );
      })}

      {/* <div className={styles.listingSliderImgMAin}>
        <img className={styles.listingSliderImges} src={image} alt="img" />
      </div>
      <div className={styles.listingSliderImgMAin}>
        <img className={styles.listingSliderImges} src={image} alt="img" />
      </div>
      <div className={styles.listingSliderImgMAin}>
        <img className={styles.listingSliderImges} src={image} alt="img" />
      </div> */}
    </Carousel>
  );

  return (
    <div className={styles.card}>
      <div>
        <div className={styles.tag}>{tag}</div>
        <img className={styles.favourties} src={heart} alt="img" />
        {cardImgSlider}
      </div>
      <div className={styles.cardContent}>
        <div>
          <div className={styles.heading}>{heading}</div>
          <div className={styles.subHeading}>{subHeading}</div>
        </div>
        <div className={styles.locationPrice}>
          <div className={styles.locationDiv}>
            <img src={locationPin} alt="img" />
            <div className="ms-1">{location}</div>
          </div>
          <div className={styles.price}>${price}/day</div>
        </div>
        <div className="d-flex justify-content-between">
          <div className={styles.locationDiv}>
            <img src={share} onClick={onShare} alt="img" />
            <img className={styles.eyeIcon} src={eye} alt="img" />
            <span>{views}</span>
          </div>
          <Link className={styles.routesLink} to="/ListingPreview">
            <CardButton
              buttonText={"View Details"}
              onClick={() => onViewDetails(item)}
              width={"170px"}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturesCard;
