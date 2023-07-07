import React from "react";
import styles from './Settings.module.css';
import { Header } from "../../components";
import ProfileNavigatBtn from '../../components/buttons/NavigationBtn';
import navigateBtnIcon from "../../assets/pngs/navigatBtnIcon.png";
import bgLeft from "../../assets/pngs/bg-leftHalf.png";

const Settings = () => {
  return (
    <div>
      <Header />
      <div className={styles.content}>
        <div className={styles.profileHeading}>
          Settings
        </div>
        <div className={styles.profileImgNameMainCon}>
          <ProfileNavigatBtn buttonText={"Notification Setting"} img={navigateBtnIcon} />
          <ProfileNavigatBtn buttonText={"Edit Password"} img={navigateBtnIcon} />
          <ProfileNavigatBtn buttonText={"privacy Policy"} img={navigateBtnIcon} />
        </div>
      </div>
      <div className={styles.notifiBgImgCon}>
        <img className={styles.notifiBgImg} src={bgLeft} alt="" />
      </div>
    </div>
  );
};

export default Settings;