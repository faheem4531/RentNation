import React from "react";
import styles from './ListingCard.module.css';
import locationPin from '../../images/homepage/svgs/location.svg';

const ListingCard = ({ title, location, amount, image }) => {
  return (
    <div className="container">

      <div className={styles.card}>
        <img className={styles.cardImg} src={image} />
        <span className={styles.heading}>{title}</span>
        <span className={styles.listNum}>{amount} listings</span>
        <div className={styles.locationDiv}>
          <img src={locationPin} />
          <div className="ms-1">{location}</div>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
