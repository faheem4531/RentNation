import React from "react";
import styles from "./NotificationSettings.module.css";
import { Header } from "../../components";
import Toggle from "../../components/buttons/Toggle";
import bgLeft from "../../assets/pngs/bg-leftHalf.png";

const NotificationSettings = () => {
  return (
    <div>
      <Header Login={true} selectedNav={"profile"} />
      <div className={styles.content}>
        <div className={styles.profileHeading}>Notification Settings</div>
        <div className={styles.profileImgNameMainCon}>
          <div className={styles.toggle}>
            <div className={styles.toggleHeading}>Common</div>
            <div className={styles.toggleDiv}>
              <Toggle heading={"General Notification"} />
              <Toggle heading={"Sound"} />
              <Toggle heading={"Vibrate"} />
            </div>
            <div className={styles.line}></div>
            <div className={styles.toggleHeading}>System & services update</div>
            <div className={styles.toggleDiv}>
              <Toggle heading={"Lorem ipsum"} />
              <Toggle heading={"Lorem ipsum"} />
              <Toggle heading={"Lorem ipsum"} />
              <Toggle heading={"Lorem ipsum"} />
              <div>
                <div className={styles.toggleLastHeading}>
                  System & services update
                </div>
                <div className={styles.toggleDiv}>
                  <Toggle heading={"New Service Available"} />
                  <Toggle heading={"New Tips Available"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.notifiBgImgCon}>
        <img className={styles.notifiBgImg} src={bgLeft} alt="" />
      </div>
    </div>
  );
};

export default NotificationSettings;
