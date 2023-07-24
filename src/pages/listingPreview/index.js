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
import { getProductById } from "../../store/thunk/SingleProductThunk";

const ListingPreview = () => {
  const customClassNames = {
    month: "custom-month",
    weekDays: "custom-weekdays",
    days: "custom-days",
    arrows: "custom-arrows",
  };

  const dispatch = useDispatch();
  const location = useLocation();
  console.log("location???????????", location);

  const [showModal, setShowModal] = useState(false);
  const [showBillModal, setShowBillModal] = useState(false);
  const [values, setValues] = useState([new DateObject()]);
  const [selectedTab, setSelectedTab] = useState("Description");
  const product = useSelector((state) => state.singleProduct.product);

  console.log("productsingle", product);
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
    dispatch(getProductById(location?.state?.id));
  }, []);

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
              <img
                className={styles.listPreCalShareIcon}
                src={shareIcon}
                alt=""
              />
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
          <div className={styles.listPreCalLocSubHeading}>
            Available dates are highlighted
          </div>
          <div className={styles.listPreCalMain}>
            <Calendar
              classNames={customClassNames}
              format="DD-MM-YYYY"
              color="#121212"
              primaryColor="#ffffff"
              value={values}
              onChange={setValues}
              range
              rangeHover
              // render={<DateObject />}
            />
          </div>
          <div className={styles.CalenderPricePerCon}>
            <div className={styles.CalenderPricePer}>
              Total Cost - <span> $300</span>
            </div>
            <div className={styles.CalenderPercantage}>
              {product?.discountPerWeek}%
            </div>
          </div>
          <div className={styles.CalenderPricePerDay}>
            Per day cost <span> ${product?.pricePerDay}</span>
          </div>
          <div className={styles.CalenderPricePerDes}>
            You got 10% discount because you purchase more than a weak.
          </div>
          <div className={styles.CalenderBtn}>
            <CalenderBtn
              buttonText="Make request"
              width="96%"
              onClick={handleSigninBtn}
            />
          </div>
        </div>
      </div>
      <div className={styles.ListingPreviewFooter}>
        <img className={styles.bgLeft} src={bgLeft} />
        <Footer />
      </div>
      {showModal && (
        <PopUpModal
          open={showModal}
          onClose={() => setShowModal(false)}
          heading="Summary"
          hidden={false}
          buttonText="Signin"
          width="450px !important"
          children={
            <Summary
              itemImage={SummeryImg}
              itemTitle={"Beache Supplies"}
              itemLocation={"Caicos"}
              discription={
                "The beach is a stunning natural landscape where the land gently meets the vast expanse of the sea. It is a place of serene beauty,The beach is a stunning natural landscape where the land gently meets the vast expanse of the sea. It is a place of serene beauty,"
              }
              closePreModal={() => setShowModal(false)}
              openNextModal={() => handleBillModal()}
              total={"300"}
            />
          }></PopUpModal>
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
