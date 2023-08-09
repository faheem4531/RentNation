import React, { useState } from "react";
import CardButton from "../buttons/CardButton";
import LoginButton from "../buttons/LoginButton";
import styles from "./ListingCard.module.css";
import eye from "../../assets/svgs/list-eye.svg";
import locationPin from "../../assets/svgs/list-location.svg";
import share from "../../assets/svgs/list-share.svg";
import heart from "../../assets/svgs/list-heart.svg";
import user from "../../assets/svgs/user.svg";
import gauge from "../../assets/svgs/gauge.svg";
import monitor from "../../assets/svgs/monitor.svg";
import wifi from "../../assets/svgs/wifi.svg";
import chair from "../../assets/svgs/rocking-chair.svg";
import bike from "../../assets/svgs/bike.svg";
import PopUpModal from "../modals/PopUpModal";
import Payment from "../modals/Payment";
import PaymentDetails from "../modals/PaymentDetails";
import { Link } from "react-router-dom";

const ListingCard = ({
  heading,
  subHeading,
  location,
  price,
  views,
  onShare,
  onViewDetails,
  image,
  listingTitle,
  featureDetails = undefined,
  flag,
  item,
}) => {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showPaymentDetailsModal, setShowPaymentDetailsModal] = useState(false);
  function handlePaymentModal() {
    setShowPaymentModal(true);
  }

  function handlePaymentDetailsModal() {
    setShowPaymentModal(false);
    setShowPaymentDetailsModal(true);
  }

  return (
    <div className={styles.card}>
      <div>
        <img className={styles.image} src={image} />
      </div>
      <div className={styles.cardContent}>
        {listingTitle ? (
          <div>
            <div className={styles.headingContainer}>
              <div className={styles.heading}>{heading}</div>
              <img className={styles.favourties} src={heart} />
            </div>
            <div className={styles.subHeadingContainer}>
              <div className={styles.subHeading}>{subHeading}</div>
              <div className={styles.price}>${price}/day</div>
            </div>
          </div>
        ) : (
          <div className={styles.orderHeader}>
            <div className={styles.heading}>{heading}</div>
            {featureDetails?.damage && (
              <div className={styles.damage}>Midsize suv</div>
            )}
            <div className={styles.featureDetials}>
              <div className={styles.subFeatures}>
                <div className={styles.userDiv}>
                  <img className={styles.icon} src={user} alt="User" />
                  <span>{featureDetails?.users}</span>
                </div>
                {featureDetails?.milage && (
                  <div className={styles.milage}>
                    <img className={styles.icon} src={gauge} alt="Milage" />
                    <span>{featureDetails?.milage} Milage</span>
                  </div>
                )}
                {featureDetails?.icon && (
                  <div className={styles.featureicos}>
                    <img className={styles.icon} src={monitor} alt="monitor" />
                    <img className={styles.icon} src={wifi} alt="wifi" />
                    <img className={styles.icon} src={chair} alt="chair" />
                    <img className={styles.icon} src={bike} alt="bike" />
                  </div>
                )}
              </div>
              {!featureDetails?.damage && (
                <LoginButton
                  width={"92px"}
                  buttonText={"BOOKED"}
                  onClick={() => handlePaymentModal()}
                />
              )}
            </div>
          </div>
        )}
        <div className={styles.locationPrice}>
          <div className={styles.locationDiv}>
            <div className="d-flex">
              <img src={locationPin} />
              <div className={styles.locationPlace}>{location?.name}</div>
            </div>
            {/* <div className={styles.locationDetails}>
              Close to abc and abc and abc
            </div> */}
          </div>
        </div>
        <div className="d-flex">
          {flag && (
            <CardButton
              buttonText={"View Details"}
              onClick={() => onViewDetails(item)}
            />
          )}
          {!flag && (
            <Link className="text-decoration-none" to={"/damageReport"}>
              <CardButton buttonText={"View Details"} onClick={onViewDetails} />
            </Link>
          )}
          {featureDetails && !featureDetails.shareCard ? (
            ""
          ) : (
            <div className={styles.eyeDiv}>
              <img src={share} onClick={onShare} />
              <img className={styles.eyeIcon} src={eye} />
              <span>{views}</span>
            </div>
          )}
        </div>
      </div>
      {showPaymentModal && (
        <PopUpModal
          open={true}
          onClose={() => setShowPaymentModal(false)}
          heading="Payment Method"
          hidden={false}
          width="400px !important"
          children={
            <Payment
              openPaymentDetailsMod={() => handlePaymentDetailsModal()}
            />
          }></PopUpModal>
      )}
      {showPaymentDetailsModal && (
        <PopUpModal
          open={true}
          onClose={() => setShowPaymentDetailsModal(false)}
          heading="Add card detial"
          hidden={false}
          width="400px !important"
          children={<PaymentDetails />}></PopUpModal>
      )}
    </div>
  );
};

export default ListingCard;
