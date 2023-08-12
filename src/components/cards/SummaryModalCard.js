import React from "react";

import styles from './SummarryModalCard.module.css';
import LocationPin from '../../assets/svgs/list-location.svg';

const SummaryModalCard = ({ itemImage, itemTitle, itemLocation, width, height, gap, fontSize, mt }) => {
  const imageStyle = {
    width: width,
    height: height
  };

  const textStyle = {
    gap: gap,
    fontSize: fontSize
  }

  return (
    <div className={styles.summary} style={textStyle}>
      <img style={imageStyle} src={itemImage} />
      <div className={styles.content}>
        <div>{itemTitle}</div>
        <div className={styles.location} style={{ marginTop: mt }}>
          <img src={LocationPin} />
          <span>{itemLocation}</span>
        </div>
      </div>
    </div>
  );
};

export default SummaryModalCard;