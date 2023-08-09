import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./Order.module.css";
import { Header } from "../../components";
import OrderCards from "../../components/cards/ListingCard";
import bgLeft from "../../assets/pngs/bg-leftHalf.png";
import bgRight from "../../assets/pngs/bg-rightHalf.png";
import { orderData, damageReportData } from "../../store/thunk/OrderThunk";

const Order = () => {
  const dispatch = useDispatch();

  const orders = useSelector((state) => state?.order?.order);

  const DamageReport = useSelector(
    (state) => state?.DamageReport?.damageReportData
  );

  useEffect(() => {
    dispatch(orderData());
    dispatch(damageReportData());
  }, [dispatch]);

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
          {orders?.length > 0 ? (
            orders.map((item) => (
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
            ))
          ) : (
            <p className={styles.noOrders}>No orders available.</p>
          )}
        </div>
        <div className={styles.bookedOrderMain}>
          <div className={styles.booked}>Waiver</div>
        </div>
        <div className={styles.bookedOrderMainCon}>
          {/* {beachCardsData.map((item) => ( */}

          {DamageReport?.length > 0 ? (
            DamageReport?.map((item) => (
              <OrderCards
                key={item.id}
                heading={item?.product?.name}
                location={item?.product?.location}
                views={item?.product?.viewCounter}
                image={item?.product?.images[0]}
                onShare={item?.onShare}
                onViewDetails={item?.onViewDetails}
                featureDetails={{
                  damage: false,
                  users: `${item?.product?.quantity}`,
                  shareCard: true,
                }}
                flag={true}
              />
            ))
          ) : (
            <p className={styles.noOrders}>No damage report available.</p>
          )}

          {/* <OrderCards
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
          /> */}
          {/* ))} */}
        </div>
      </div>
      <img className={styles.bgLeft} src={bgLeft} alt="img" />
      <img className={styles.bgRight} src={bgRight} alt="img" />
    </div>
  );
};

export default Order;
