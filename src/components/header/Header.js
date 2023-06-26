import React, { useState } from "react";
import styles from "./Header.module.css";

import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  const [burgerState, setBurgerState] = useState(false);

  function handleNavbar() {
    setBurgerState((prev) => !prev);
  }

  return (
    <div>
      <div className={styles.navMain}>
        <nav className="navbar navbar-expand-md ">
          <div className="container">
            <a className="navbar-brand" href="#">
              Navbar
            </a>
            <button
              className={styles.navBtn}
              type="button"
              onClick={handleNavbar}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className={`collapse navbar-collapse justify-content-end${
                burgerState ? " show" : ""
              }`}
              //   id="navbarNav"
            >
              <div className={styles.navItemMain}>
                <ul className="navbar-nav text-center">
                  <li className={styles.navItem}>
                    <a className="nav-link" aria-current="page" href="#">
                      Home
                    </a>
                  </li>
                  <li className={styles.navItem}>
                    <a className="nav-link" href="#">
                      Features
                    </a>
                  </li>
                  <li className={styles.navItem}>
                    <a className="nav-link" href="#">
                      Pricing
                    </a>
                  </li>
                  <li className={styles.navItem}>
                    <a className="nav-link" href="#">
                      Pricing
                    </a>
                  </li>
                  <li className={styles.navItem}>
                    <a className="nav-link" href="#">
                      Pricing
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
