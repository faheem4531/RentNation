import React from "react";
import CardButton from "../buttons/CardButton";

import styles from './ListingCard.module.css';
import eye from '../../assets/svgs/list-eye.svg';
import locationPin from '../../assets/svgs/list-location.svg';
import share from '../../assets/svgs/list-share.svg';
import heart from '../../assets/svgs/list-heart.svg';

const ListingCard = ({ heading, subHeading, location, price, views, onShare, onViewDetails, image }) => {

  return (
    <div className={styles.card}>
      <div>
        <img className={styles.image} src={image} />
      </div>
      <div className={styles.cardContent}>
        <div className={styles.headingContainer}>
          <div className={styles.heading}>{heading}</div>
          <img className={styles.favourties} src={heart} />
        </div>
        <div className={styles.subHeadingContainer}>
          <div className={styles.subHeading}>{subHeading}</div>
          <div className={styles.price}>
            ${price}/day
          </div>
        </div>
        <div className={styles.locationPrice}>
          <div className={styles.locationDiv}>
            <img src={locationPin} />
            <div className={styles.locationPlace}>{location}</div>
            <div className={styles.locationDetails}>Close to abc and abc and abc</div>
          </div>
        </div>
        <div className="d-flex">
          <CardButton buttonText={'View Details'} onClick={onViewDetails} />
          <div className={styles.eyeDiv}>
            <img src={share} onClick={onShare} />
            <img className={styles.eyeIcon} src={eye} />
            <span>{views}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListingCard;