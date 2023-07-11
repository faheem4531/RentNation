import React from "react";
import styles from "./Profile.module.css";
import { Header } from "../../components";
import profileImg from "../../assets/pngs/mainProfileImg.png";
import settingIcon from "../../assets/pngs/settings.png";
import editIcon from "../../assets/pngs/edit.png";
import labelIcon from "../../assets/pngs/editWhite.png";
import navigateBtnIcon from "../../assets/pngs/navigatBtnIcon.png";

import ProfileBtn from "../../components/buttons/CardButton";
import ProfileText from "../../components/textarea/Textarea";
import ProfileNavigatBtn from "../../components/buttons/NavigationBtn";

import { Link } from "react-router-dom";

import bgLeft from "../../assets/pngs/bg-leftHalf.png";

const Profile = () => {
  return (
    <div>
      <Header Login={true} />
      <div className={styles.profileMain}>
        <div className={styles.profileHeading}>Profile</div>
        <div className={styles.profileImgNameMainCon}>
          <div className={styles.profileImgNameMain}>
            <div className={styles.profileImgCon}>
              <img className={styles.profileImg} src={profileImg} alt="" />
            </div>
            <div className={styles.profileNameLocMain}>
              <div className={styles.profileName}>Harley Quinn</div>
              <div className={styles.profileLocation}>Los Angles, USA </div>
            </div>
            <img
              className={styles.profileSettingIcon}
              src={settingIcon}
              alt=""
            />
          </div>
          <div className={styles.profileBtn}>
            <Link className={styles.Link} to={"/EditProfile"}>
              <ProfileBtn
                buttonText={"Edit Photo"}
                img={editIcon}
                radius={"4px"}
                padding={"24px "}
                mrIcon={"6px"}
              />
            </Link>
          </div>
          <ProfileText
            lable="About"
            placeholder={"About"}
            height={"182px"}
            backgroundColor={"#2B2B2B"}
            labelIcon={labelIcon}
            borderRadius={"20px"}
          />
          <div className={styles.profileNavigateBtn}>
            <Link className={styles.Link} to={"/EditProfile"}>
              <ProfileNavigatBtn
                buttonText={"Edit Profile"}
                img={navigateBtnIcon}
              />
            </Link>
          </div>
          <Link className={styles.Link} to={"/Ticket"}>
            <ProfileNavigatBtn
              buttonText={"My Tickets"}
              img={navigateBtnIcon}
            />
          </Link>
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

export default Profile;
