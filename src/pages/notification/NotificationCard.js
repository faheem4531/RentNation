import React from "react";
import styles from "./Notificaton.module.css";

const NotificationCard = ({ heading, subHeading, timing, icon }) => {
  return (
    <div>
      <div className={styles.notificationCardMain}>
        <div className={styles.notifiCardImg}>
          <img src={icon} alt="" />
        </div>
        <div className={styles.notifiCardDetail}>
          <div className={styles.notifiCardHeading}>{heading}</div>
          <div className={styles.notifiCardTime}>{timing}</div>
          <div className={styles.notifiCardDiscri}>{subHeading}</div>
        </div>
      </div>
    </div>
  );
};

export default NotificationCard;
