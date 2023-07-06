import React from "react";
import styles from './AddTicket.module.css';
import Input from "../../components/inputs/Input";
import Textarea from "../../components/textarea/Textarea";
import LoginButton from "../../components/buttons/LoginButton";

const AddTicket = () => {
  return (
    <div className={styles.addTicket}>
      <div className={styles.profileMain}>
        <div className={styles.profileHeading}>Add Tickets</div>
        <div className={styles.profileImgNameMainCon}>
          <Input
            borderRadius={'20px'}
            label={'Department'}
            type={'text'}
            backgroundColor={'var(--bg-grey4-dark-color)'}
            placeholder={'Sales'}
            mbLabel={'20px'}
            padding={'18px 16px'}
          />
          <Input
            borderRadius={'20px'}
            label={'Subject'}
            type={'text'}
            backgroundColor={'var(--bg-grey4-dark-color)'}
            placeholder={'Subject'}
            padding={'18px 16px'}
            mbLabel={'20px'}
          />
          <Textarea
            placeholder={'Description'}
            lable={'Description'}
            borderRadius={'20px'}
            height={'170px'}
            backgroundColor={'var(--bg-grey4-dark-color)'}
            mbLabel={'20px'}
          />
          <div className={styles.submitButton}>
            <LoginButton
              onClick={() => { }}
              borderColor={'1px solid var(--border-dark-yellow1-color)'}
              buttonText={'Submit'}
              width={'350px'}
            />
          </div>
        </div>
      </div>

    </div>
  );
};

export default AddTicket;