import React, { useState } from "react";

import styles from "./Summary.module.css";
import LoginButton from "../buttons/LoginButton";
import SummaryModalCard from "../cards/SummaryModalCard";
import PopUpModal from "../../components/modals/PopUpModal";
import BillDetails from "../../components/modals/BillDetails";

const Summary = ({
  total,
  discription,
  itemImage,
  itemTitle,
  itemLocation,
  openNextModal,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const checkboxStyles = {
    appearance: "none",
    width: "20px",
    height: "20px",
    backgroundColor: "transparent",
    border: "1px solid var(--yellow1-color)",
    borderRadius: "4px",
    outline: "none",
  };

  return (
    <div className={styles.summary}>
      <SummaryModalCard
        itemImage={itemImage}
        itemLocation={itemLocation}
        itemTitle={itemTitle}
      />
      <div className={styles.discription}>{discription}</div>
      <div className={styles.billContent}>
        <div className={styles.total}>
          <span>Total Cost</span>
          <span>${total}</span>
        </div>
        {/* <div className={styles.total}>
          <span>You want extra itoms </span>
          <span className={styles.addMoreColor}>Add More</span>
        </div> */}
      </div>
      {/* <div className={styles.addedCardDiv}>
        <div className={styles.checkCard}>
          <SummaryModalCard
            itemImage={itemImage}
            itemLocation={itemLocation}
            itemTitle={itemTitle}
            gap="9px"
            width="61.617px"
            height="43.931px"
            fontSize="16px"
            mt="0px"
          />
          <div>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
              className={styles.customCheckbox}
              style={checkboxStyles}
              id="customCheck1"
            />
          </div>
        </div>
        <div className={styles.checkCard}>
          <SummaryModalCard
            itemImage={itemImage}
            itemLocation={itemLocation}
            itemTitle={itemTitle}
            gap="9px"
            width="62px"
            height="44px"
            fontSize="16px"
            mt="0px"
          />
          <div>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
              className={styles.customCheckbox}
              style={checkboxStyles}
              id="customCheck1"
            />
          </div>
        </div>
      </div> */}
      <div className={styles.bookBtn}>
        <LoginButton
          buttonText="Book Now"
          fontSize="16px"
          borderColor="1px solid var(--border-dark-yellow1-color) "
          onClick={() => openNextModal()}
        />
      </div>
    </div>
  );
};

export default Summary;
