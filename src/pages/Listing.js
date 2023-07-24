import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "../styles/Listing.module.css";
import HeroInput from "../components/inputs/HeroInput";
import ListingCard from "../components/cards/ListingCard";
import { Header, Footer } from "../components";
import { getHomeData } from "../store/thunk/HomeThunk";

import btnArrow from "../images/homepage/svgs/footerDropArrow.svg";
import bgLeft from "../assets/pngs/bg-leftHalf.png";
import bgRight from "../assets/pngs/bg-rightHalf.png";
import { useNavigate } from "react-router-dom";

const Listing = () => {
  const navigation = useNavigate();
  const [showDropdown, setShowDorpdown] = useState(false);

  function handleListDropdown() {
    setShowDorpdown((preValue) => !preValue);
  }
  const dropdownClass = showDropdown ? "" : "d-none";

  const dispatch = useDispatch();

  const category = useSelector((state) => state.home.category);
  const [products, setProducts] = useState([]);

  function navigateToPreviewPage(item) {
    navigation("/ListingPreview", { state: { id: item.id } });
  }

  useEffect(() => {
    if (category.length > 0) {
      const kayasCategory = category.find((cat) => cat.name === "KAYAKS");
      const test = kayasCategory?.products;
      setProducts(test);
    }
  }, [category]);

  useEffect(() => {
    dispatch(getHomeData());
  }, []);

  return (
    <div className={styles.listingContainer}>
      <Header Login={false} selectedNav="LISTINGS" />
      <div className="container">
        <div className={styles.listingMain}>
          <div className={styles.listingFilter}>
            <div className={styles.listingFilterMain}>
              <div className={styles.filter}>Filters</div>
              <div className={styles.filterBtnMain}>
                <button
                  onClick={handleListDropdown}
                  className={styles.filterBtn}>
                  CATEGORIES
                </button>
                <div className={styles.filterBtnArow}>
                  <img src={btnArrow} alt="" />
                </div>
              </div>
              <div className={styles.filterList}>
                <ul className={dropdownClass}>
                  {category &&
                    category.map((item) => {
                      return (
                        <li
                          onClick={() => setProducts(item?.products)}
                          key={item?.id}>
                          {item?.name}
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.listingInputHeaderMain}>
            <div className={styles.listingInputHeader}>
              <div className={styles.listingHeaderHeading}>
                Beach Supplies for Rent
              </div>
              <div className={styles.listingInput}>
                <HeroInput />
              </div>
            </div>
            <div className={styles.cardContainer}>
              {!products?.length ? (
                <h2 className={styles.noProductsAbailable}>
                  No products available
                </h2>
              ) : (
                products?.map((item) => (
                  <ListingCard
                    key={item.id}
                    heading={item.name}
                    subHeading={item.description}
                    location={item.location}
                    price={item.pricePerDay}
                    views={item.viewCounter}
                    onShare={item.onShare}
                    onViewDetails={navigateToPreviewPage}
                    image={item.images[0]}
                    flag={true}
                    item={item}
                    listingTitle={item.listingTitle}
                  />
                ))
              )}
            </div>
          </div>
        </div>
        <img className={styles.bgLeft} src={bgLeft} alt="img" />
        <img className={styles.bgRight} src={bgRight} alt="img" />
      </div>
      <Footer />
    </div>
  );
};

export default Listing;
