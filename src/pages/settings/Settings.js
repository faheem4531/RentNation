import React from "react";
import styles from "./Settings.module.css";
import { Header } from "../../components";
import ProfileNavigatBtn from "../../components/buttons/NavigationBtn";
import navigateBtnIcon from "../../assets/pngs/navigatBtnIcon.png";
import bgLeft from "../../assets/pngs/bg-leftHalf.png";

import { Link } from "react-router-dom";

const Settings = () => {
  return (
    <div>
      <Header Login={true} />
      <div className={styles.content}>
        <div className={styles.profileHeading}>Settings</div>
        <div className={styles.profileImgNameMainCon}>
          <Link className={styles.Link} to={"/NotificationSettings"}>
            <ProfileNavigatBtn
              buttonText={"Notification Setting"}
              img={navigateBtnIcon}
            />
          </Link>
          <Link className={styles.Link} to={"/EditPassword"}>
            <ProfileNavigatBtn
              buttonText={"Edit Password"}
              img={navigateBtnIcon}
            />
          </Link>
          <Link className={styles.Link} to={"/PrivacyPolicy"}>
            <ProfileNavigatBtn
              buttonText={"Privacy Policy"}
              img={navigateBtnIcon}
            />
          </Link>
        </div>
      </div>
      <div className={styles.notifiBgImgCon}>
        <img className={styles.notifiBgImg} src={bgLeft} alt="" />
      </div>
    </div>
  );
};

export default Settings;
