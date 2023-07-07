import React from "react";
import styles from "./Notificaton.module.css";
import { Header } from "../../components";
import NotificationCard from "./NotificationCard";
import notifiBellIcon from "../../assets/pngs/notifibell.png";

import bgLeft from "../../assets/pngs/bg-leftHalf.png";

const Notification = () => {
  const notiData = [
    {
      id: "C1",
      heading: "Booked",
      subHeading:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. ",
      timing: "1 min ago",
      icon: notifiBellIcon,
    },
    {
      id: "C2",
      heading: "Payment done",
      subHeading:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. ",
      timing: "1 min ago",
      icon: notifiBellIcon,
    },
    {
      id: "C3",
      heading: "Booked",
      subHeading:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. ",
      timing: "1 min ago",
      icon: notifiBellIcon,
    },
    {
      id: "C4",
      heading: "Payment done",
      subHeading:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. ",
      timing: "1 min ago",
      icon: notifiBellIcon,
    },
    {
      id: "C5",
      heading: "Booked",
      subHeading:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. ",
      timing: "1 min ago",
      icon: notifiBellIcon,
    },
    {
      id: "C6",
      heading: "Payment done",
      subHeading:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. ",
      timing: "1 min ago",
      icon: notifiBellIcon,
    },
  ];
  return (
    <div>
      <Header
        Login={true} />
      <div className={styles.notifMain}>
        <div className={styles.notifHeading}>Notification</div>
        <div className={styles.notifCardsContainer}>
          {notiData.map((item) => (
            <NotificationCard
              key={item.id}
              heading={item.heading}
              subHeading={item.subHeading}
              timing={item.timing}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
      <div className={styles.notifiBgImgMainCon}>
        <div className={styles.notifiBgImgCon}>
          <img className={styles.notifiBgImg} src={bgLeft} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Notification;
