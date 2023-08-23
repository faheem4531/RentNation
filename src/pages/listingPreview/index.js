import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./ListingPreview.module.css";
import { Header, Footer } from "../../components";
import shareIcon from "../../assets/svgs/share.svg";
import heartIcon from "../../assets/svgs/list-heart.svg";
import locationIcon from "../../assets/svgs/list-location.svg";
import Slider from "./Slider";
import ReviewRating from "./ReviewRating";
import PopUpModal from "../../components/modals/PopUpModal";
import Summary from "../../components/modals/Summary";
import SummeryImg from "../../assets/pngs/summaryImg.png";
import BillDetails from "../../components/modals/BillDetails";
import { useLocation } from "react-router-dom";
import { Calendar, DateObject } from "react-multi-date-picker";
import "react-multi-date-picker/styles/colors/purple.css";

import bgLeft from "../../assets/pngs/bg-leftHalf.png";
import CalenderBtn from "../../components/buttons/LoginButton";
import {
  getProductById,
  updateProductView,
} from "../../store/thunk/SingleProductThunk";
import Places from "google-places-web";
import axios from "axios";
import { FacebookIcon, FacebookShareButton } from "react-share";
import { motion } from "framer-motion";

const ListingPreview = () => {
  const customClassNames = {
    month: "custom-month",
    weekDays: "custom-weekdays",
    days: "custom-days",
    arrows: "custom-arrows",
  };
  const product = useSelector((state) => state.singleProduct.product);
  Places.apiKey = process.env.REACT_APP_GOOGLE_API_KEY;

  const dispatch = useDispatch();
  const location = useLocation();

  const [showModal, setShowModal] = useState(false);
  const [showBillModal, setShowBillModal] = useState(false);
  const [values, setValues] = useState(null);
  const [selectedTab, setSelectedTab] = useState("Description");
  const [isShare, setIsShare] = useState(false);

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  function handleSigninBtn() {
    setShowModal(true);
  }

  function handleBillModal() {
    setShowModal(false);
    setShowBillModal(true);
  }

  useEffect(() => {
    dispatch(getProductById(location?.pathname?.split("/")[2]));
  }, []);

  useEffect(() => {
    if (product) {
      const payload = {
        id: location?.pathname?.split("/")[2],
        counter: product.viewCounter,
      };
      dispatch(updateProductView(payload));
      fetchLocationDetails();
    }
  }, [product.viewCounter]);

  // useEffect(() => {
  //   console.log(
  //     "calendar values => ",
  //     values?.length > 0
  //       ? values.map(
  //           (value) => `${value?.day}-${value?.month?.number}-${value?.year}`
  //         )
  //       : `${values?.day}-${values?.month?.number}-${values?.year}`
  //   );
  // }, [values]);

  const fetchLocationDetails = async () => {
    // const search2 = await Places.details({
    //   placeid: product?.location?.placeId,
    // });
    const headers = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET",
      },
    };
    axios
      .get(
        `http://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}`,
        headers
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    // console.log("place details => ", search2);
  };

  const no_of_days = values?.length > 0 ? values?.length : 0;

  return (
    <div>
      <Header Login={false} selectedNav="LISTING" />
      <div className={styles.listingPreviewMain}>
        <div className={styles.listingPreviewSliderMain}>
          <div className={styles.listingPreviewSlider}>
            <Slider images={product?.images} />
          </div>
          <div className={styles.listingPreHeading}>{product?.name}</div>
          <div className={styles.listPreCalLoc}>
            <img
              className={styles.listPreCalLocIcon}
              src={locationIcon}
              alt=""
            />
            {"Pakistan"}
            {/* <span className={styles.listPreCalDes}>
              Close to abc and abc and abc
            </span> */}
            <div className={styles.tab}>
              <div
                className={`${styles.tabItem} ${styles.tabItems} ${
                  selectedTab === "Description" ? styles.selected : ""
                }`}
                onClick={() => handleTabClick("Description")}>
                Description
              </div>
              <div
                className={`${styles.tabItem} ${styles.tabItems} ${
                  selectedTab === "Review" ? styles.selected : ""
                }`}
                onClick={() => handleTabClick("Review")}>
                Review
              </div>
            </div>
            {selectedTab === "Description" && (
              <div className={styles.descriptionTabsCon}>
                <div className={styles.descriptionTabs}>
                  {product?.description}
                </div>
              </div>
            )}
            {selectedTab === "Review" && (
              <div>
                <div className={styles.descriptionTabs}>
                  <ReviewRating reviews={product?.review} />
                </div>
              </div>
            )}
          </div>
        </div>
        <div className={styles.listingPreviewCalenderMain}>
          <div className={styles.listPreCalPriceMain}>
            <div className={styles.listPreCalPrice}>
              {product?.pricePerDay}$/day
            </div>
            <div className={styles.listPreCalPrice}>
              <button
                className={styles.shareButton}
                onClick={() => setIsShare(true)}
                onBlur={() => setTimeout(() => setIsShare(false), 100)}
              >
                <img
                  className={styles.listPreCalShareIcon}
                  src={shareIcon}
                  alt=""
                />
              </button>
              {isShare && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, x: 50, y: -20 }}
                  animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                  transition={{
                    duration: 0.4,
                    type: "spring",
                  }}
                  className={styles.shareButtonContainer}
                >
                  <FacebookShareButton
                    url={window.location.origin + location.pathname}
                    style={{ cursor: "pointer" }}
                    // hashtag={"#" + post.tags[0]}
                  >
                    <FacebookIcon size="28" round={true} />
                    <span>Share with Facebook</span>
                  </FacebookShareButton>
                </motion.div>
              )}
              <img src={heartIcon} alt="" />
            </div>
          </div>
          <div className={styles.listPreCalLoc}>
            <img
              className={styles.listPreCalLocIcon}
              src={locationIcon}
              alt=""
            />
            {"Pakistan"}
          </div>
          <div className={styles.listPreCalLocDescription}>
            {product?.description}
          </div>
          {product?.availability?.length > 0 ? (
            <div className={styles.listPreCalLocSubHeading}>
              Available dates are highlighted
            </div>
          ) : (
            <p className={styles.errorDates}>No dates available</p>
          )}
          {product?.availability?.length > 0 && (
            <div className={styles.listPreCalMain}>
              <Calendar
                classNames={customClassNames}
                format="YYYY-MM-DD"
                color="#121212"
                primaryColor="#ffffff"
                value={values}
                onChange={setValues}
                multiple
                // range={product?.availability?.length > 1 ? true : false}
                // rangeHover
                // minDate={new Date(product.availability[0])}
                // maxDate={
                //   new Date(
                //     product.availability[product.availability.length - 1]
                //   )
                // }
                mapDays={({ date, selectedDate }) => {
                  let dates = `${date.year}-${
                    date.month.number < 10
                      ? `0${date.month.number}`
                      : date.month.number
                  }-${date.day}`;

                  let isAvailable = product.availability.includes(dates);

                  if (isAvailable) return { disabled: false };
                  else
                    return {
                      disabled: true,
                      style: { color: "#ccc" },
                    };
                }}
              />
            </div>
          )}
          <div className={styles.CalenderPricePerCon}>
            <div className={styles.CalenderPricePer}>
              Total Cost - <span> ${product?.pricePerDay * no_of_days}</span>
            </div>
            <div className={styles.CalenderPercantage}>
              {product?.discountPerWeek}%
            </div>
          </div>
          <div className={styles.CalenderPricePerDay}>
            Per day cost <span> ${product?.pricePerDay}</span>
          </div>
          <div className={styles.CalenderPricePerDes}>
            You got {product?.discountPerWeek}% discount because you purchase
            more than a weak.
          </div>
          {no_of_days > 0 && (
            <div className={styles.CalenderBtn}>
              <CalenderBtn
                buttonText="Make request"
                width="96%"
                onClick={handleSigninBtn}
              />
            </div>
          )}
        </div>
      </div>
      <div className={styles.ListingPreviewFooter}>
        <img className={styles.bgLeft} src={bgLeft} alt="img" />
        <Footer />
      </div>

      {showModal && (
        <div>
          <PopUpModal
            open={showModal}
            onClose={() => setShowModal(false)}
            heading="Summary"
            hidden={false}
            buttonText="Signin"
            width="450px !important"
            children={
              <Summary
                itemImage={product?.images.length > 0 && product?.images[0]}
                itemTitle={product?.name}
                itemLocation={"Pakistan"}
                discription={product?.description}
                closePreModal={() => setShowModal(false)}
                openNextModal={() => handleBillModal()}
                total={no_of_days * product?.pricePerDay}
              />
            }
          ></PopUpModal>
        </div>
      )}

      {showBillModal && (
        <PopUpModal
          open={showBillModal}
          onClose={() => setShowBillModal(false)}
          heading="Bill Details"
          hidden={false}
          buttonText="Signin"
          width="450px !important"
          children={
          <BillDetails total={"300"} subTotal={"300"} vat={"300"} />
        }></PopUpModal>
      )}
    </div>
  );
};

export default ListingPreview;
