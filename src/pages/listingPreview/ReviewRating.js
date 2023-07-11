import React from "react";
import Rating from "react-rating";
// import "./ReviewRating.css"; // Import custom CSS styles
import styles from "./ListingPreview.module.css";

const ReviewRating = ({ rating }) => {
  return (
    <div className={styles["review-rating-main"]}>
      <div className={styles["review-rating"]}>
        <Rating
          emptySymbol={<span className={styles["rating-empty"]}>&#9734;</span>}
          fullSymbol={<span className={styles["rating-full"]}>&#9733;</span>}
          initialRating={rating}
          // readonly
        />
        <div className={styles["rating-heading-main"]}>
          <div className={styles["rating-heading"]}>4.8 rating</div>
          <div className={styles["rating-heading-details"]}>
            based on 60 reviews
          </div>
        </div>
      </div>
      <div className={styles["rating-bars-main"]}>
        <div className={styles["rating-bars-num"]}>5</div>
        <div className={styles["rating-bars"]}>
          <div className={styles["rating-bar"]}>
            <div
              className={styles["rating-progress"]}
              style={{ width: `${(rating / 5) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
      <div className={styles["rating-bars-main"]}>
        <div className={styles["rating-bars-num"]}>4</div>
        <div className={styles["rating-bars"]}>
          <div className={styles["rating-bar"]}>
            <div
              className={styles["rating-progress"]}
              style={{ width: `${(0 / 5) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
      <div className={styles["rating-bars-main"]}>
        <div className={styles["rating-bars-num"]}>3</div>
        <div className={styles["rating-bars"]}>
          <div className={styles["rating-bar"]}>
            <div
              className={styles["rating-progress"]}
              style={{ width: `${(0 / 5) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
      <div className={styles["rating-bars-main"]}>
        <div className={styles["rating-bars-num"]}>2</div>
        <div className={styles["rating-bars"]}>
          <div className={styles["rating-bar"]}>
            <div
              className={styles["rating-progress"]}
              style={{ width: `${(0 / 5) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
      <div className={styles["rating-bars-main"]}>
        <div className={styles["rating-bars-num"]}>1</div>
        <div className={styles["rating-bars"]}>
          <div className={styles["rating-bar"]}>
            <div
              className={styles["rating-progress"]}
              style={{ width: `${(0 / 5) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewRating;
