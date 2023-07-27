import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Order.module.css";
import { Header } from "../../components";
import OrderCards from "../../components/cards/ListingCard";
import beach1 from "../../assets/pngs/listing-beach-img1.png";
import beach2 from "../../assets/pngs/listing-beach-img2.png";
import beach3 from "../../assets/pngs/listing-beach-img3.png";
import bgLeft from "../../assets/pngs/bg-leftHalf.png";
import bgRight from "../../assets/pngs/bg-rightHalf.png";
import { orderData } from "../../store/thunk/OrderThunk";

const Order = () => {
  const dispatch = useDispatch();

  const orders = useSelector((state) => state?.order?.order);

  console.log("orders:", orders);

  useEffect(() => {
    dispatch(orderData());
  }, [dispatch]);

  const beachCardsData = [
    {
      id: "b1",
      heading: "Midsize suv",
      subHeading:
        "The beach is a stunning natural landscape where the land gently meets the vast expanse of ",
      location: "New York, NY",
      price: "50",
      views: "569",
      image: beach1,
      onShare: () => {},
      onViewDetails: () => {},
      listingTitle: false,
      featureDetails: {
        users: "5 People",
        milage: "Unlimited ",
      },
    },
    {
      id: "b2",
      heading: "Kayaks",
      subHeading:
        "The beach is a stunning natural landscape where the land gently meets the vast expanse of ",
      location: "New York, NY",
      price: "50",
      views: "569",
      image: beach2,
      tag: "FEATURED",
      onShare: () => {},
      onViewDetails: () => {},
      listingTitle: false,
      featureDetails: {
        users: "2 Persons",
      },
    },
    {
      id: "b3",
      heading: "beache Supplies",
      subHeading: "The beach is a stunning natural landscape",
      location: "New York, NY",
      price: "50",
      views: "569",
      image: beach3,
      tag: "FEATURED",
      onShare: () => {},
      onViewDetails: () => {},
      listingTitle: false,
      featureDetails: {
        users: "5 People",
        icon: true,
      },
    },
  ];

  return (
    <div className={styles.orderScreen}>
      <Header Login={true} selectedNav={"ORDER"} />
      <div className={styles.orderMain}>
        <div className={styles.orderHeading}>Orders</div>
        <div className={styles.bookedOrderMain}>
          <div className={styles.booked}>Booked</div>
          <div className={styles.bookedBtn}>See All</div>
        </div>
        <div className={styles.bookedOrderMainCon}>
          {orders?.length > 0 &&
            orders?.map((item) => {
              console.log(
                item?.OrderProduct[0]?.product?.name,
                "item?.orders?.OrderProduct[0]?.product?.name"
              );
              return (
                <OrderCards
                  key={item.id}
                  heading={item?.OrderProduct[0]?.product?.name}
                  location={item?.OrderProduct[0]?.product?.location}
                  views={item?.OrderProduct[0]?.product?.viewCounter}
                  image={item?.OrderProduct[0]?.product?.images[0]}
                  onShare={item?.onShare}
                  onViewDetails={item?.onViewDetails}
                  featureDetails={{
                    damage: false,
                    users: `${item?.OrderProduct[0]?.product?.quantity}`,
                    shareCard: true,
                  }}
                  flag={true}
                />
              );
            })}
        </div>
        <div className={styles.bookedOrderMain}>
          <div className={styles.booked}>Waiver</div>
        </div>
        <div className={styles.bookedOrderMainCon}>
          {/* {beachCardsData.map((item) => ( */}
          <OrderCards
            id="w1"
            heading="Damage Report"
            subHeading="The beach is a stunning natural landscape where the land gently meets the vast expanse of "
            location="Turkis"
            price="50"
            views="569"
            flag={false}
            image={beach2}
            listingTitle={false}
            featureDetails={{
              damage: true,
              users: "5 People",
              shareCard: false,
            }}
          />
          {/* ))} */}
        </div>
      </div>
      <img className={styles.bgLeft} src={bgLeft} />
      <img className={styles.bgRight} src={bgRight} />
    </div>
  );
};

export default Order;
