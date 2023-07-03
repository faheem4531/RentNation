import React, { useState } from "react";
import styles from "./Header.module.css";

import logo from "../../images/homepage/svgs/logo.svg";
import LoginButton from "../buttons/LoginButton";

import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  const [burgerState, setBurgerState] = useState(false);
  const [selectedNav, setSelectedNav] = useState("HOME");

  function handleNavbar() {
    setBurgerState((prev) => !prev);
  }

  function handleClick(item) {
    setSelectedNav(item);
  }

  return (
    <div>
      <div className={styles.navMain}>
        <div className="container">
          <nav className="">
            <div className="navbar-brand">
              <img className={styles.logo} src={logo} alt="" />
            </div>
            <div>
              <button
                className={styles.navBtn}
                type="button"
                onClick={handleNavbar}
              >
                <div className={styles.hamMain}>
                  <div className={styles.bar}></div>
                  <div className={styles.bar}></div>
                  <div className={styles.bar}></div>
                </div>
              </button>
            </div>
            <div
              className={`collapse navbar-collapse justify-content-end${burgerState ? " show" : ""
                }`}
            //   id="navbarNav"
            >
              <div className={styles.navItemMain}>
                <div className={styles.navItemSubMain}>
                  <div
                    className={styles.navItem}
                    onClick={() => handleClick("HOME")}
                  >
                    <a
                      aria-current="page"
                      href="#"
                      className={`${
                        selectedNav === "HOME" ? styles.activeNavItem : ""
                      }`}
                    >
                      HOME
                    </a>
                  </div>
                  <div
                    className={styles.navItem}
                    onClick={() => handleClick("LISTINGS")}
                  >
                    <a
                      className={`${
                        selectedNav === "LISTINGS" ? styles.activeNavItem : ""
                      }`}
                      href="#"
                    >
                      LISTINGS
                    </a>
                  </div>
                  <div
                    className={styles.navItem}
                    onClick={() => handleClick("ABOUT")}
                  >
                    <a
                      href="#"
                      className={`${
                        selectedNav === "ABOUT" ? styles.activeNavItem : ""
                      }`}
                    >
                      ABOUT
                    </a>
                  </div>
                  <div
                    className={styles.navItem}
                    onClick={() => handleClick("CONTACT")}
                  >
                    <a
                      href="#"
                      className={`${
                        selectedNav === "CONTACT" ? styles.activeNavItem : ""
                      }`}
                    >
                      CONTACT
                    </a>
                  </div>
                  <div className={styles.navBtnMain}>
                    <LoginButton buttonText={"Log in / Sign Up"} />
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
