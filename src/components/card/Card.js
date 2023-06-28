import React from "react";
import CardButton from "../buttons/CardButton";

import styles from './Card.module.css'
import eye from '../../images/homepage/svgs/eye.svg';
import locationPin from '../../images/homepage/svgs/location.svg';
import share from '../../images/homepage/svgs/share.svg';
import heart from '../../images/homepage/svgs/favourties.svg';

const Card = ({ tag, heading, subHeading, location, price, views, onShare, onViewDetails, image }) => {

  const cardImgSlider = <div id="myCarousel" className="carousel slide">
    <ol className="carousel-indicators">
      <li
        data-target="#myCarousel" data-slide-to="0" className="active" ></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
      <li data-target="#myCarousel" data-slide-to="3"></li>
    </ol>
    <div className="carousel-inner">
      <div className="item active">
        <img src={image} />
      </div>
      <div className="item">
        <img src={image} />
      </div>
      <div className="item">
        <img src={image} />
      </div>
      <div className="item">
        <img src={image} />
      </div>
    </div>
  </div>

  return (
    <div className={styles.card}>
      <div>
        <div className={styles.tag}>{tag}</div>
        <img className={styles.favourties} src={heart} />
        {cardImgSlider}
      </div>
      <div className={styles.cardContent}>
        <div>
          <div className={styles.heading}>{heading}</div>
          <div className={styles.subHeading}>{subHeading}</div>
        </div>
        <div className={styles.locationPrice}>
          <div className={styles.locationDiv}>
            <img src={locationPin} />
            <div className="ms-1">{location}</div>
          </div>
          <div className={styles.price}>
            ${price}/day
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <div className={styles.locationDiv}>
            <img src={share} onClick={onShare} />
            <img className="me-1 ms-2" src={eye} />
            <span>{views}</span>
          </div>
          <CardButton buttonText={'View Details'} onClick={onViewDetails} />
        </div>
      </div>
    </div>
  )
}

export default Card;