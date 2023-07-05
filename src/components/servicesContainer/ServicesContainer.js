import React from "react";
import ServicesCard from "../cards/ServicesCard";

import styles from './ServicesContainer.module.css';
import img1 from '../../images/homepage/listCard1.png';
import img2 from '../../images/homepage/listCard2.png';
import img3 from '../../images/homepage/listCard3.png';

const ServicesContainer = (props) => {
  const listCardData = [
    {
      id: 'l1',
      title: 'Golf cart',
      location: 'Washington',
      amount: '250+',
      image: img1
    },
    {
      id: 'l2',
      title: 'Beache Supplies',
      location: 'Washington',
      amount: '250+',
      image: img2
    },
    {
      id: 'l3',
      title: 'Kayaks',
      location: 'Washington',
      amount: '250+',
      image: img3
    }
  ];

  return (
    <div className="container">
      <div className={styles.subContainer}>
        <div className={styles.listContent}>
          <div className={styles.listHeading}>Get Cars, Beaches and Kayaks on Rent</div>
          <div>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales
            ultrices nulla blandit volutpat Vestib ulum ante ipsum primis in faucibus orci luctus et ultrices posuere
            cubilia curae.</div>
        </div>
        <div className={styles.listCardContainer}>
          {listCardData.map((items) => (
            <ServicesCard
              key={items.id}
              image={items.image}
              title={items.title}
              location={items.location}
              amount={items.amount}
            />
          ))}
        </div>
      </div>

    </div>
  );
};

export default ServicesContainer;
