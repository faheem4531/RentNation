import React from "react";
import CardButton from "../buttons/CardButton";
import LoginButton from "../buttons/LoginButton";
import styles from './ListingCard.module.css';
import eye from '../../assets/svgs/list-eye.svg';
import locationPin from '../../assets/svgs/list-location.svg';
import share from '../../assets/svgs/list-share.svg';
import heart from '../../assets/svgs/list-heart.svg';
import user from '../../assets/svgs/user.svg';
import gauge from '../../assets/svgs/gauge.svg';
import monitor from '../../assets/svgs/monitor.svg';
import wifi from '../../assets/svgs/wifi.svg';
import chair from '../../assets/svgs/rocking-chair.svg';
import bike from '../../assets/svgs/bike.svg';


const ListingCard = ({ heading, subHeading, location, price, views, onShare, onViewDetails, image, listingTitle, featureDetails = undefined }) => {

  return (
    <div className={styles.card}>
      <div>
        <img className={styles.image} src={image} />
      </div>
      <div className={styles.cardContent}>
        {listingTitle ?
          <div>
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
          </div>
          :
          <div className={styles.orderHeader}>
            <div className={styles.heading}>{heading}</div>
            {featureDetails.damage && <div className={styles.damage}>Midsize suv</div>}
            <div className={styles.featureDetials}>
              <div className={styles.subFeatures}>
                <div className={styles.userDiv}>
                  <img className={styles.icon} src={user} alt="User" />
                  <span>{featureDetails.users}</span>
                </div>
                {featureDetails.milage && (
                  <div className={styles.milage}>
                    <img className={styles.icon} src={gauge} alt="Milage" />
                    <span>{featureDetails.milage} Milage</span>
                  </div>
                )}
                {featureDetails.icon &&
                  < div className={styles.featureicos}>
                    <img className={styles.icon} src={monitor} alt="monitor" />
                    <img className={styles.icon} src={wifi} alt="wifi" />
                    <img className={styles.icon} src={chair} alt="chair" />
                    <img className={styles.icon} src={bike} alt="bike" />
                  </div>
                }
              </div>
              {!featureDetails.damage && < LoginButton
                width={'92px'}
                buttonText={'BOOKED'}
              />}
            </div>
          </div>}
        <div className={styles.locationPrice}>
          <div className={styles.locationDiv}>
            <div className="d-flex">
              <img src={locationPin} />
              <div className={styles.locationPlace}>{location}</div>
            </div>
            <div className={styles.locationDetails}>Close to abc and abc and abc</div>
          </div>
        </div>
        <div className="d-flex">
          <CardButton buttonText={'View Details'} onClick={onViewDetails} />
          {featureDetails && !featureDetails.shareCard ? "" : <div className={styles.eyeDiv}>
            <img src={share} onClick={onShare} />
            <img className={styles.eyeIcon} src={eye} />
            <span>{views}</span>
          </div>}
        </div>
      </div>
    </div >
  )
}

export default ListingCard;