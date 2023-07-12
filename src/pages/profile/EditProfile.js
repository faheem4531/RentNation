import React from "react";
import styles from "./EditProfile.module.css";
import { Header } from "../../components";
import Input from "../../components/inputs/Input";
import Textarea from "../../components/textarea/Textarea";
import LoginButton from "../../components/buttons/LoginButton";
import bgLeft from "../../assets/pngs/bg-leftHalf.png";

const EditProfile = () => {
  return (
    <div className={styles.addTicket}>
      <Header Login={true} selectedNav={"profile"} />
      <div className={styles.content}>
        <div className={styles.profileHeading}>
          <div>Edit Profile</div>
          <div className={styles.subHeading}>Edit your profile information</div>
        </div>
        <div className={styles.profileImgNameMainCon}>
          <Input
            label={"Name*"}
            type={"text"}
            backgroundColor={"var(--bg-grey4-dark-color)"}
            placeholder={"Edit your name"}
            // lableFont={'22px'}
            inputFont={"16px"}
          />
          <Input
            label={"Email*"}
            type={"text"}
            backgroundColor={"var(--bg-grey4-dark-color)"}
            placeholder={"Edit your email"}
            // lableFont={'22px'}
            inputFont={"16px"}
          />
          <Textarea
            placeholder={"About"}
            lable={"Edit your about"}
            height={"170px"}
            backgroundColor={"var(--bg-grey4-dark-color)"}
            // lableFont={'22px'}
            inputFont={"16px"}
          />
          <div className={styles.submitButton}>
            <LoginButton
              onClick={() => {}}
              borderColor={"1px solid var(--border-dark-yellow1-color)"}
              buttonText={"Submit"}
              borderRadius={"8px"}
              fontSize={"16px"}
            />
          </div>
        </div>
      </div>
      <div className={styles.notifiBgImgCon}>
        <img className={styles.notifiBgImg} src={bgLeft} alt="" />
      </div>
    </div>
  );
};

export default EditProfile;
