import React from "react";
import Card from "../card/Card";



import styles from './CardsContainer.module.css';



const CardsContainer = (props) => {

  return (
    <div>
      <div className="container">
        <div className={styles.featureTitle}>Featured {props.featureTitle} for Rent</div>
        <div className={styles.cardContainer}>
          {props.cardData.map((item) => (
            <Card
              key={item.id}
              heading={item.heading}
              subHeading={item.subHeading}
              location={item.location}
              price={item.price}
              views={item.views}
              tag={item.tag}
              onShare={item.onShare}
              onViewDetails={item.onViewDetails}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default CardsContainer;