import React from "react";
import styles from "./HeroSection.module.css";
import heroMark from "../../images/homepage/heroMark.png";
import HeroInput from "../heroInput/HeroInput";

const HeroSection = () => {
  return (
    <div>
      <div className={styles.heroSectionMain}>
        <div className={styles.heroSliderMain}>
          <div id="myCarousel" className="carousel slide" data-ride="carousel">
            <div className={styles.carouselIndicator}>
              <ol className="carousel-indicators">
                <li
                  data-target="#myCarousel"
                  data-slide-to="0"
                  className="active mb-2"
                ></li>
                <li
                  data-target="#myCarousel"
                  data-slide-to="1"
                  className="mb-2"
                ></li>
                <li
                  data-target="#myCarousel"
                  data-slide-to="2"
                  className="mb-2"
                ></li>
              </ol>
            </div>

            <div className="carousel-inner">
              <div className="item active">
                <div className={styles.heroSliderImgMain}>
                  {/* <img src={heraSea} className={styles.sliderImg} alt="" /> */}
                  <div className={styles.heroContentMain}>
                    <div className={styles.heroConContent}>
                      <div className={styles.heroSubMainHeading}>
                        Welcome to RentNation
                      </div>
                      <div className={styles.heroMainHeading}>
                        Where your island adventure begins!
                        <span className={styles.heroMark}>
                          <img src={heroMark} alt="" />
                        </span>
                      </div>
                      <div className={styles.heroContent}>
                        Welcome to RentNation, where your next beach adventure
                        begins! Whether you're craving a relaxing day by the
                        shore or an exciting water exploration, we've got you
                        covered. With our convenient rental services, you can
                        choose between multiple fantastic options
                      </div>
                    </div>
                    <div className={styles.HeroInputCon}>
                      <HeroInput />
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className={styles.heroSliderImgMain}>
                  {/* <img src={heroCar} className={styles.sliderImg} alt="" /> */}
                  <div className={styles.heroContentMain2}>
                    <div className={styles.heroConContent}>
                      <div className={styles.heroSubMainHeading}>
                        Welcome to RentNation
                      </div>
                      <div className={styles.heroMainHeading}>
                        Where your island adventure begins!
                        <span className={styles.heroMark}>
                          <img src={heroMark} alt="" />
                        </span>
                      </div>
                      <div className={styles.heroContent}>
                        Welcome to RentNation, where your next beach adventure
                        begins! Whether you're craving a relaxing day by the
                        shore or an exciting water exploration, we've got you
                        covered. With our convenient rental services, you can
                        choose between multiple fantastic options
                      </div>
                    </div>
                    <div className={styles.HeroInputCon}>
                      <HeroInput />
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className={styles.heroSliderImgMain}>
                  {/* <img src={heroBeach} className={styles.sliderImg} alt="" /> */}
                  <div className={styles.heroContentMain3}>
                    <div className={styles.heroConContent}>
                      <div className={styles.heroSubMainHeading}>
                        Welcome to RentNation
                      </div>
                      <div className={styles.heroMainHeading}>
                        Where your island adventure begins!
                        <span className={styles.heroMark}>
                          <img src={heroMark} alt="" />
                        </span>
                      </div>
                      <div className={styles.heroContent}>
                        Welcome to RentNation, where your next beach adventure
                        begins! Whether you're craving a relaxing day by the
                        shore or an exciting water exploration, we've got you
                        covered. With our convenient rental services, you can
                        choose between multiple fantastic options
                      </div>
                    </div>
                    <div className={styles.HeroInputCon}>
                      <HeroInput />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
