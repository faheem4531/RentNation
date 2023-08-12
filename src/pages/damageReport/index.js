import React from "react";
import styles from "./DamageReport.module.css";
import { Header } from "../../components";
import DamageImg from "../../images/homepage/golfCar-img1.png";
import bgLeft from "../../assets/pngs/bg-leftHalf.png";
import bgRight from "../../assets/pngs/bg-rightHalf.png";

const DamageReport = () => {
  return (
    <div>
      <Header Login={true} selectedNav="HOME" />
      <div className={styles.damageReportMain}>
        <div className={styles.damageReportCon}>
          <div className={styles.damageReportHeadingMain}>Damage report</div>
          <div className={styles.damageReportHeadingSub}>
            Vehicle Information
          </div>
          <div className={styles.damageReportList}>
            <span className={styles.damageReportListDetailHeading}>Model:</span>
            Golf Cart
          </div>
          <div className={styles.damageReportList}>
            <span className="me-2">Make:</span>
            Golf Cart
          </div>
          <div className={styles.damageReportList}>
            <span className={styles.damageReportListDetailHeading}>Year:</span>
            2022
          </div>
          <div className={styles.damageReportList}>
            <span className={styles.damageReportListDetailHeading}>Color:</span>
            Black
          </div>
          <div className={styles.damageReportList}>
            <span className={styles.damageReportListDetailHeading}>
              License plate:
            </span>
            12344
          </div>
        </div>
        <div className={styles.damageDescriptionMain}>
          <div className={styles.damageReportHeadingSub}>Description</div>
          <div className={styles.damageDescription}>
            Damage from accidents or collisions with other vehicles, stationary
            objects, or pedestrians. It can involve dents, scratches, broken
            glass, damaged bumpers, fenders, or even structural damage to the
            SUV's frame. damage to the internal components of the SUV's
            mechanical systems. It can include issues with the engine,
            transmission, suspension, brakes, or electrical systems. Mechanical
            damage can result from poor maintenance, wear and tear, or component
            failure.
          </div>
        </div>
      </div>

      <div className={styles.damageImgbgImg}>
        <div className={styles.damageImgMain}>
          <div className={styles.damageSeeMain}>
            <div className={styles.damageImg}>Images</div>
            <div className={styles.damageSee}>See All</div>
          </div>
          <div className={styles.damageImgCon}>
            <img src={DamageImg} alt="" />
            <img src={DamageImg} alt="" />
            <img src={DamageImg} alt="" />
            <img src={DamageImg} alt="" />
            <img src={DamageImg} alt="" />
          </div>
        </div>
        <div className={styles.bgLeftCon}>
          <img src={bgLeft} alt="" />
        </div>
        <div className={styles.bgRightCon}>
          <img src={bgRight} alt="" />
        </div>
      </div>
    </div>
  );
};

export default DamageReport;
