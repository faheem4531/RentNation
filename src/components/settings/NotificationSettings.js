import React from "react";
import styles from './NotificationSettings.module.css';
import Toggle from '../buttons/Toggle';

const NotificationSettings = () => {
  return (
    <div>
      <div className={styles.profileMain}>
        <div className={styles.profileHeading}>
          Notification Settings
        </div>
        <div className={styles.profileImgNameMainCon}>
          <div className={styles.toggle}>
            <div className={styles.toggleHeading}>Common</div>
            <div className={styles.toggleDiv}>
              <Toggle
                heading={'General Notification'}
              />
              <Toggle
                heading={'Sound'}
              />
              <Toggle
                heading={'Vibrate'}
              />
            </div>
            <div className={styles.line}></div>
            <div className={styles.toggleHeading}>System & services update</div>
            <div className={styles.toggleDiv}>
              <Toggle
                heading={'Lorem ipsum'}
              />
              <Toggle
                heading={'Lorem ipsum'}
              />
              <Toggle
                heading={'Lorem ipsum'}
              />
              <Toggle
                heading={'Lorem ipsum'}
              />
              <div>
                <div className={styles.toggleLastHeading}>System & services update</div>
                <div className={styles.toggleDiv}>
                  <Toggle
                    heading={'New Service Available'}
                  />
                  <Toggle
                    heading={'New Tips Available'}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationSettings;