import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import styles from "./Profile.module.css";
import { Header } from "../../components";
import ProfileBtn from "../../components/buttons/CardButton";
import ProfileText from "../../components/textarea/Textarea";
import ProfileNavigatBtn from "../../components/buttons/NavigationBtn";
import { getProfileData } from "../../store/thunk/ProfileThunk";

import profileImg from "../../assets/pngs/mainProfileImg.png";
import settingIcon from "../../assets/pngs/settings.png";
import editIcon from "../../assets/pngs/edit.png";
import labelIcon from "../../assets/pngs/editWhite.png";
import navigateBtnIcon from "../../assets/pngs/navigatBtnIcon.png";
import bgLeft from "../../assets/pngs/bg-leftHalf.png";

const Profile = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch();

  const profile = useSelector((state) => state.profile.user);

  function navigateToEditProfile() {
    navigation("/EditProfile", { state: { profile } });
  }

  useEffect(() => {
    dispatch(getProfileData());
  }, []);

  return (
    <div>
      <Header Login={true} selectedNav={"profile"} />
      <div className={styles.profileMain}>
        <div className={styles.profileHeading}>Profile</div>
        <div className={styles.profileImgNameMainCon}>
          <div className={styles.profileImgNameMain}>
            <div className={styles.profileImgCon}>
              <img className={styles.profileImg} src={profileImg} alt="" />
            </div>
            <div className={styles.profileNameLocMain}>
              <div className={styles.profileName}>{profile?.name}</div>
              <div className={styles.profileLocation}>Pakistan</div>
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
            disabled
            value={profile?.profile?.bio}
          />
          <div className={styles.profileNavigateBtn}>
            <ProfileNavigatBtn
              buttonText={"Edit Profile"}
              img={navigateBtnIcon}
              onClick={navigateToEditProfile}
            />
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
