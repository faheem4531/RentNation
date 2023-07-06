import React from "react";
import styles from "./Ticket.module.css";


const TicketCard = ({ heading, discription }) => {
  return (
    <div className={styles.cardMain}>
      <div className={styles.cardHeading}>{heading}</div>
      <div className={styles.cardSubHeading}>{heading}:</div>
      {discription}
    </div>
  )
}

export default TicketCard;