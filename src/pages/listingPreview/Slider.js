import React from "react";
import styles from "./ListingPreview.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import img1 from "../../assets/pngs/listing-beach-img1.png";
import img2 from "../../assets/pngs/listing-beach-img2.png";
import img3 from "../../assets/pngs/listing-beach-img3.png";

const Slider = () => {
  return (
    <div className={styles.carouselMAin}>
      <Carousel
        className={styles.listingSliderMain}
        showIndicators={false}
        thumbWidth={100}
      >
        <div className={styles.listingSliderImgMAin}>
          <img className={styles.listingSliderImges} src={img1} />
        </div>
        <div>
          <img className={styles.listingSliderImges} src={img2} />
        </div>
        <div>
          <img className={styles.listingSliderImges} src={img3} />
        </div>
        <div>
          <img className={styles.listingSliderImges} src={img3} />
        </div>
        <div>
          <img className={styles.listingSliderImges} src={img3} />
        </div>
        <div>
          <img className={styles.listingSliderImges} src={img3} />
        </div>
        <div>
          <img className={styles.listingSliderImges} src={img3} />
        </div>
        <div>
          <img className={styles.listingSliderImges} src={img3} />
        </div>
        <div>
          <img className={styles.listingSliderImges} src={img3} />
        </div>
        <div>
          <img className={styles.listingSliderImges} src={img3} />
        </div>
        <div>
          <img className={styles.listingSliderImges} src={img3} />
        </div>
        <div>
          <img className={styles.listingSliderImges} src={img3} />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
