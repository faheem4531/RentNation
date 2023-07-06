import React from "react";
import styles from './EditProfile.module.css';
import Input from "../../components/inputs/Input";
import Textarea from "../../components/textarea/Textarea";
import LoginButton from "../../components/buttons/LoginButton";

const EditProfile = () => {
  return (
    <div className={styles.addTicket}>
      <div className={styles.profileMain}>
        <div className={styles.profileHeading}>
          <div>Edit Profile</div>
          <div className={styles.subHeading}>Edit your profile information</div>
        </div>
        <div className={styles.profileImgNameMainCon}>
          <Input
            label={'Name*'}
            type={'text'}
            backgroundColor={'var(--bg-grey4-dark-color)'}
            placeholder={'Edit your name'}
          />
          <Input
            label={'Email*'}
            type={'text'}
            backgroundColor={'var(--bg-grey4-dark-color)'}
            placeholder={'Edit your email'}
          />
          <Textarea
            placeholder={'About'}
            lable={'Edit your about'}
            height={'170px'}
            backgroundColor={'var(--bg-grey4-dark-color)'}
          />
          <div className={styles.submitButton}>
            <LoginButton
              onClick={() => { }}
              borderColor={'1px solid var(--border-dark-yellow1-color)'}
              buttonText={'Submit'}
            />
          </div>
        </div>
      </div>

    </div>
  );
};

export default EditProfile;