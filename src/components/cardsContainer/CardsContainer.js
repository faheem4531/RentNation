import React from "react";
import Card from "../card/Card";

import golf1 from '../../images/homepage/golfCar-img1.png';
import golf2 from '../../images/homepage/golfCar-img2.png';
import golf3 from '../../images/homepage/golfCar-img3.png';

import styles from './CardsContainer.module.css';

const CardsContainer = (props) => {

  return (
    <div>
      <div className='container'>
        <div className={styles.featureTitle}>Featured {props.featureTitle} for Rent</div>
        <div className={styles.cardContainer}>
          <Card
            heading={'Golf Cart'}
            subHeading={'Lorem ipsum dolor sit amet consectetur. Consequat tincidunt'}
            location={'Turkis'}
            price={'50'}
            views={'569'}
            onShare={() => { }}
            onViewDetails={() => { }}
            image={golf1}
            tag={'FEATURED'}
          />
          <Card
            heading={'Golf Cart'}
            subHeading={'Lorem ipsum dolor sit amet consectetur. Consequat tincidunt'}
            location={'Turkis'}
            price={'50'}
            views={'569'}
            onShare={() => { }}
            onViewDetails={() => { }}
            image={golf2}
            tag={'FEATURED'}
          />
          <Card
            heading={'Golf Cart'}
            subHeading={'Lorem ipsum dolor sit amet consectetur. Consequat tincidunt'}
            location={'Turkis'}
            price={'50'}
            views={'569'}
            onShare={() => { }}
            onViewDetails={() => { }}
            image={golf3}
            tag={'FEATURED'}
          />
          <Card
            heading={'Golf Cart'}
            subHeading={'Lorem ipsum dolor sit amet consectetur. Consequat tincidunt'}
            location={'Turkis'}
            price={'50'}
            views={'569'}
            onShare={() => { }}
            onViewDetails={() => { }}
            image={golf1}
            tag={'FEATURED'}
          />
          <Card
            heading={'Golf Cart'}
            subHeading={'Lorem ipsum dolor sit amet consectetur. Consequat tincidunt'}
            location={'Turkis'}
            price={'50'}
            views={'569'}
            onShare={() => { }}
            onViewDetails={() => { }}
            image={golf2}
            tag={'FEATURED'}
          />
          <Card
            heading={'Golf Cart'}
            subHeading={'Lorem ipsum dolor sit amet consectetur. Consequat tincidunt'}
            location={'Turkis'}
            price={'50'}
            views={'569'}
            onShare={() => { }}
            onViewDetails={() => { }}
            image={golf3}
            tag={'FEATURED'}
          />
        </div>
      </div>
    </div>
  )
}

export default CardsContainer;