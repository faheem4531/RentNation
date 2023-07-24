import React from "react";
import ServicesCard from "../cards/ServicesCard";

import styles from "./ServicesContainer.module.css";

const ServicesContainer = ({ category }) => {
  return (
    <div className="container">
      <div className={styles.subContainer}>
        <div className={styles.listContent}>
          <div className={styles.listHeading}>
            Get Cars, Beaches and Kayaks on Rent
          </div>
          <div>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat
            Vestib ulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae.
          </div>
        </div>
        <div className={styles.listCardContainer}>
          {category &&
            category.map((items) => {
              return (
                items.products.length > 0 && (
                  <ServicesCard
                    key={items.id}
                    image={items?.products[0]?.images[0]}
                    title={items?.name}
                    location={"Pakistan"}
                    amount={items?.products?.length}
                  />
                )
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ServicesContainer;
