import React from "react";
import Rating from "react-rating";
import styles from "./ListingPreview.module.css";

const ReviewRating = ({ reviews }) => {
  const calculateRatingCount = () => {
    const ratingCount = [0, 0, 0, 0, 0];
    let totalStars = 0;

    reviews?.forEach((review) => {
      ratingCount[review?.stars - 1]++;
      totalStars += review?.stars;
    });

    return { ratingCount, averageRating: totalStars / reviews?.length };
  };

  const { ratingCount, averageRating } = calculateRatingCount();

  return (
    <div className={styles["review-rating-main"]}>
      <div className={styles["review-rating"]}>
        <Rating
          emptySymbol={<span className={styles["rating-empty"]}>&#9734;</span>}
          fullSymbol={<span className={styles["rating-full"]}>&#9733;</span>}
          initialRating={averageRating}
        />
        <div className={styles["rating-heading-main"]}>
          <div className={styles["rating-heading"]}>
            {averageRating?.toFixed(1)} rating
          </div>
          <div className={styles["rating-heading-details"]}>
            based on {reviews?.length} reviews
          </div>
        </div>
      </div>

      {[5, 4, 3, 2, 1]?.map((star) => (
        <div className={styles["rating-bars-main"]} key={star}>
          <div className={styles["rating-bars-num"]}>{star}</div>
          <div className={styles["rating-bars"]}>
            <div className={styles["rating-bar"]}>
              <div
                className={styles["rating-progress"]}
                style={{
                  width: `${(ratingCount[star - 1] / reviews?.length) * 100}%`,
                }}></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewRating;
