import React from "react";
import styles from "./Ticket.module.css";

const TicketCard = ({ department, discription, subject }) => {
  return (
    <div className={styles.cardMain}>
      <div className={styles.cardHeading}>{department}</div>
      <div className={styles.cardSubHeading}>{subject}:</div>
      {discription}
    </div>
  );
};

export default TicketCard;
