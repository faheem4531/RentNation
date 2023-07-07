import React from "react";
import styles from './EditPassword.module.css';
import { Header } from "../../components";
import Input from "../../components/inputs/Input";
import LoginButton from "../../components/buttons/LoginButton";
import bgLeft from "../../assets/pngs/bg-leftHalf.png";

const EditPassword = () => {
  return (
    <div className={styles.addTicket}>
      <Header />
      <div className={styles.content}>
        <div className={styles.profileHeading}>
          <div>Edit Password</div>
          <div className={styles.subHeading}>Edit Your Password</div>
        </div>
        <div className={styles.profileImgNameMainCon}>
          <Input
            label={'Old Password'}
            type={'password'}
            backgroundColor={'var(--bg-grey4-dark-color)'}
            placeholder={'Enter old password'}
            mbLabel={'6px'}
            inputFont={'16px'}
          />
          <Input
            label={'New Password'}
            type={'password'}
            backgroundColor={'var(--bg-grey4-dark-color)'}
            placeholder={'Enter new password'}
            inputFont={'16px'}
          />
          <Input
            label={'Confirm New Password'}
            type={'password'}
            backgroundColor={'var(--bg-grey4-dark-color)'}
            placeholder={'Confirm New Password'}
          />
          <div className={styles.submitButton}>
            <LoginButton
              onClick={() => { }}
              borderColor={'1px solid var(--border-dark-yellow1-color)'}
              buttonText={'Submit'}
              fontSize={'16px'}
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

export default EditPassword;