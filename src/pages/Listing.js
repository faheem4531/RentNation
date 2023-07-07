import React, { useState } from "react";

import styles from "../styles/Listing.module.css";
import HeroInput from "../components/inputs/HeroInput";
import ListingCard from "../components/cards/ListingCard";
import { Header, Footer } from "../components";

import btnArrow from "../images/homepage/svgs/footerDropArrow.svg";
import beach1 from "../assets/pngs/listing-beach-img1.png";
import beach2 from "../assets/pngs/listing-beach-img2.png";
import beach3 from "../assets/pngs/listing-beach-img3.png";
import beach4 from "../assets/pngs/listing-beach-img4.png";
import beach5 from "../assets/pngs/listing-beach-img5.png";
import beach6 from "../assets/pngs/listing-beach-img6.png";

import bgLeft from "../assets/pngs/bg-leftHalf.png";
import bgRight from "../assets/pngs/bg-rightHalf.png";

const Listing = () => {
  const [showDropdown, setShowDorpdown] = useState(false);

  function handleListDropdown() {
    setShowDorpdown((preValue) => !preValue);
  }
  const dropdownClass = showDropdown ? "" : "d-none";
  const beachCardsData = [
    {
      id: "bc1",
      heading: "beach Supplies",
      subHeading:
        "The beach is a stunning natural landscape where the land gently meets the vast expanse of ",
      location: "Turkis",
      price: "50",
      views: "569",
      image: beach1,
      onShare: () => { },
      onViewDetails: () => { },
      listingTitle: true
    },
    {
      id: "bc2",
      heading: "beach Supplies",
      subHeading:
        "The beach is a stunning natural landscape where the land gently meets the vast expanse of ",
      location: "Turkis",
      price: "50",
      views: "569",
      image: beach2,
      tag: "FEATURED",
      onShare: () => { },
      onViewDetails: () => { },
      listingTitle: 'listing'
    },
    {
      id: "bc3",
      heading: "beach Supplies",
      subHeading: "The beach is a stunning natural landscape where the land gently meets the vast expanse of ",
      location: "Turkis",
      price: "50",
      views: "569",
      image: beach3,
      tag: "FEATURED",
      onShare: () => { },
      onViewDetails: () => { },
      listingTitle: 'listing'
    },
    {
      id: "bc4",
      heading: "beach Supplies",
      subHeading: "The beach is a stunning natural landscape where the land gently meets the vast expanse of ",
      location: "Turkis",
      price: "50",
      views: "569",
      image: beach4,
      tag: "FEATURED",
      onShare: () => { },
      onViewDetails: () => { },
      listingTitle: 'listing'
    },
    {
      id: "bc5",
      heading: "beach Supplies",
      subHeading: "The beach is a stunning natural landscape where the land gently meets the vast expanse of ",
      location: "Turkis",
      price: "50",
      views: "569",
      image: beach5,
      tag: "FEATURED",
      onShare: () => { },
      onViewDetails: () => { },
      listingTitle: 'listing'
    },
    {
      id: "bc6",
      heading: "beach Supplies",
      subHeading: "The beach is a stunning natural landscape where the land gently meets the vast expanse of ",
      location: "Turkis",
      price: "50",
      views: "569",
      image: beach6,
      tag: "FEATURED",
      onShare: () => { },
      onViewDetails: () => { },
      listingTitle: 'listing'
    },
  ];

  return (
    <div className={styles.listingContainer}>
      <Header
        Login={false} />
      <div className="container">
        <div className={styles.listingMain}>
          <div className={styles.listingFilter}>
            <div className={styles.listingFilterMain}>
              <div className={styles.filter}>Filters</div>
              <div className={styles.filterBtnMain}>
                <button
                  onClick={handleListDropdown}
                  className={styles.filterBtn}
                >
                  CATEGORIES
                </button>
                <div className={styles.filterBtnArow}>
                  <img src={btnArrow} alt="" />
                </div>
              </div>
              <div className={styles.filterList}>
                <ul className={dropdownClass}>
                  <li>CARS</li>
                  <li>BEACHES</li>
                  <li>KAYAKS</li>
                  <li>GOLF CART</li>
                  <li>OTHERS</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.listingInputHeaderMain}>
            <div className={styles.listingInputHeader}>
              <div className={styles.listingHeaderHeading}>
                Beach Supplies for Rent
              </div>
              <div className={styles.listingInput}>
                <HeroInput />
              </div>
            </div>
            <div className={styles.cardContainer}>
              {beachCardsData.map((item) => (
                <ListingCard
                  key={item.id}
                  heading={item.heading}
                  subHeading={item.subHeading}
                  location={item.location}
                  price={item.price}
                  views={item.views}
                  onShare={item.onShare}
                  onViewDetails={item.onViewDetails}
                  image={item.image}
                  listingTitle={item.listingTitle}
                />
              ))}
            </div>
          </div>
        </div>
        <img className={styles.bgLeft} src={bgLeft} />
        <img className={styles.bgRight} src={bgRight} />
      </div>
      <Footer />
    </div>
  );
};

export default Listing;
