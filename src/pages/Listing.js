import React from "react";
import styles from "../styles/Listing.module.css";
import btnArrow from "../images/homepage/svgs/footerDropArrow.svg";
import { Header, Footer } from "../components";
import HeroInput from "../components/inputs/HeroInput";

const Listing = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <div className={styles.listingMain}>
          <div className={styles.listingFilter}>
            <div className={styles.listingFilterMain}>
              <div className={styles.filter}>Filters</div>
              <div className={styles.filterBtnMain}>
                <button className={styles.filterBtn}>CATEGORIES</button>
                <div className={styles.filterBtnArow}>
                  <img src={btnArrow} alt="" />
                </div>
              </div>
              <div className={styles.filterList}>
                <ul className="">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listing;
