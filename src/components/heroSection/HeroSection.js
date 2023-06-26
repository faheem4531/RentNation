import React from "react";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <div>
      <div className={styles.heroSectionMain}>
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <div className={styles.dfghj}>
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
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp"
                className={styles.sliderImg}
                alt=""
              />
            </div>

            <div className="item">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp"
                className={styles.sliderImg}
                alt="Chicago"
              />
            </div>

            <div className="item">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp"
                className={styles.sliderImg}
                alt="New york"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
