import React from "react";
import styles from './EditPassword.module.css';
import Input from "../inputs/Input";
import LoginButton from "../buttons/LoginButton";

const EditPassword = () => {
  return (
    <div className={styles.addTicket}>
      <div className={styles.profileMain}>
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
          />
          <Input
            label={'New Password'}
            type={'password'}
            backgroundColor={'var(--bg-grey4-dark-color)'}
            placeholder={'Enter new password'}
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
            />
          </div>
        </div>
      </div>

    </div>
  );
};

export default EditPassword;