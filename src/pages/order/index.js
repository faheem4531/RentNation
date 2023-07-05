import React from "react";
import styles from "./Order.module.css";
import { Header, Footer } from "../../components";
import OrderCards from "../../components/cards/ListingCard";

import beach1 from "../../assets/pngs/listing-beach-img1.png";
import beach2 from "../../assets/pngs/listing-beach-img2.png";
import beach3 from "../../assets/pngs/listing-beach-img3.png";

const Order = () => {
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
      onShare: () => {},
      onViewDetails: () => {},
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
      onShare: () => {},
      onViewDetails: () => {},
    },
    {
      id: "bc3",
      heading: "Dreamy beaches",
      subHeading: "The beach is a stunning natural landscape",
      location: "Turkis",
      price: "50",
      views: "569",
      image: beach3,
      tag: "FEATURED",
      onShare: () => {},
      onViewDetails: () => {},
    },
  ];
  return (
    <div>
      <Header />
      <div className={styles.orderMain}>
        <div className={styles.orderHeading}>Orders</div>
        <div className={styles.bookedOrderMain}>
          <div className={styles.booked}>Booked</div>
          <div className={styles.bookedBtn}>See All</div>
        </div>
        <div className={styles.bookedOrderMainCon}>
          {beachCardsData.map((item) => (
            <OrderCards
              key={item.id}
              heading={item.heading}
              subHeading={item.subHeading}
              location={item.location}
              price={item.price}
              views={item.views}
              onShare={item.onShare}
              onViewDetails={item.onViewDetails}
              image={item.image}
            />
          ))}
        </div>
        <div className={styles.bookedOrderMain}>
          <div className={styles.booked}>Waiver</div>
        </div>
        <div className={styles.bookedOrderMainCon}>
          {/* {beachCardsData.map((item) => ( */}
          <OrderCards
            id="bc2"
            heading="beach Supplies"
            subHeading="The beach is a stunning natural landscape where the land gently meets the vast expanse of "
            location="Turkis"
            price="50"
            views="569"
            image={beach2}
            tag="FEATURED"
          />
          {/* ))} */}
        </div>
      </div>
    </div>
  );
};

export default Order;
