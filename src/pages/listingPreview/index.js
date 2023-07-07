import React, { useState } from "react";
import styles from "./ListingPreview.module.css";
import { Header, Footer } from "../../components";
import shareIcon from "../../assets/svgs/share.svg";
import heartIcon from "../../assets/svgs/list-heart.svg";
import locationIcon from "../../assets/svgs/list-location.svg";

import DatePicker from "react-multi-date-picker";
import { Calendar, DateObject } from "react-multi-date-picker";
import "react-multi-date-picker/styles/colors/purple.css";

import CalenderBtn from "../../components/buttons/LoginButton";

const ListingPreview = () => {
  const customClassNames = {
    month: "custom-month",
    weekDays: "custom-weekdays",
    days: "custom-days",
    arrows: "custom-arrows",
  };

  const [values, setValues] = useState([new DateObject()]);
  const [selectedTab, setSelectedTab] = useState("Description");

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };
  return (
    <div>
      <Header />
      <div className={styles.listingPreviewMain}>
        <div className={styles.listingPreviewSliderMain}>
          <div className={styles.listingPreviewSlider}></div>
          <div className={styles.listingPreHeading}>Beache Supplies</div>
          <div className={styles.listPreCalLoc}>
            <img
              className={styles.listPreCalLocIcon}
              src={locationIcon}
              alt=""
            />
            Caicos
            <span className={styles.listPreCalDes}>
              Close to abc and abc and abc
            </span>
            <div className={styles.tab}>
              <div
                className={`${styles.tabItem} ${styles.tabItems} ${
                  selectedTab === "Description" ? styles.selected : ""
                }`}
                onClick={() => handleTabClick("Description")}
              >
                Description
              </div>
              <div
                className={`${styles.tabItem} ${styles.tabItems} ${
                  selectedTab === "Review" ? styles.selected : ""
                }`}
                onClick={() => handleTabClick("Review")}
              >
                Review
              </div>
            </div>
            {selectedTab === "Description" && (
              <div className={styles.descriptionTabsCon}>
                <div className={styles.descriptionTabs}>
                  The beach is a stunning natural landscape where the land
                  gently meets the vast expanse of the sea. It is a place of
                  serene beauty, offering a unique blend of soothing elements
                  and exhilarating experiences. A typical beach scene presents a
                  picturesque combination of sand, water, and sky, forming a
                  harmonious symphony of colors, textures, and sounds.
                </div>
                <div className={styles.descriptionTabs}>
                  As you step onto the beach, your feet sink into the soft, warm
                  sand, its fine grains gently caressing your skin. The sand
                  stretches out before you, creating a vast shoreline that
                  invites you to explore its inviting expanse. The beach is a
                  place where people come to unwind, bask in the sun, and engage
                  in a multitude of activities.
                </div>
                <div className={styles.descriptionTabs}>
                  Looking out towards the sea, you witness a mesmerizing
                  panorama of shimmering blue waters that extend to the horizon.
                  Waves crash against the shore, producing a rhythmic melody
                  that soothes the senses. The salty breeze carries a refreshing
                  aroma, filling the air with a hint of adventure and
                  tranquility.
                </div>
              </div>
            )}
            {selectedTab === "Review" && (
              <div>
                <div className={styles.descriptionTabs}>Review Content</div>
              </div>
            )}
          </div>
        </div>
        <div className={styles.listingPreviewCalenderMain}>
          <div className={styles.listPreCalPriceMain}>
            <div className={styles.listPreCalPrice}>50$/day</div>
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
            New York, NY
          </div>
          <div className={styles.listPreCalLocDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            viverra efficitur convallis. Mauris non hendrerit nullaLorem ipsum
            dolor sit{" "}
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
            <div className={styles.CalenderPercantage}>10%</div>
          </div>
          <div className={styles.CalenderPricePerDay}>
            Per day cost <span> $45</span>
          </div>
          <div className={styles.CalenderPricePerDes}>
            You got 10% discount because you purchase more than a weak.
          </div>
          <div className={styles.CalenderBtn}>
            <CalenderBtn buttonText="Make request" width="96%" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ListingPreview;
