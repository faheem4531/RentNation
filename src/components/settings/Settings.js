import React from "react";
import styles from './Settings.module.css';
import ProfileNavigatBtn from '../buttons/NavigationBtn';
import navigateBtnIcon from "../../assets/pngs/navigatBtnIcon.png";

const Settings = () => {
  return (
    <div>
      <div className={styles.profileMain}>
        <div className={styles.profileHeading}>
          Edit Password
        </div>
        <div className={styles.profileImgNameMainCon}>
          <ProfileNavigatBtn buttonText={"Notification Setting"} img={navigateBtnIcon} />
          <ProfileNavigatBtn buttonText={"Edit Password"} img={navigateBtnIcon} />
          <ProfileNavigatBtn buttonText={"privacy Policy"} img={navigateBtnIcon} />
        </div>
      </div>
    </div>
  );
};

export default Settings;