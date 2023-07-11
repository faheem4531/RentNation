import React, { useState } from "react";
import styles from "./Header.module.css";

import logo from "../../images/homepage/svgs/logo.svg";
import LoginButton from "../buttons/LoginButton";
import NavImg from "../../assets/pngs/profileImg.png";
import NavIcon from "../../assets/pngs/navIcon.png";
import BellIcn from "../../assets/pngs/bell.png";
import UserIcon from "../../assets/pngs/user.png";
import SettingIcon from "../../assets/pngs/settings.png";
import TicketsIcon from "../../assets/pngs/tickets.png";
import LogOutIcon from "../../assets/pngs/logOut.png";

import PopUpModal from "../modals/PopUpModal";
import "bootstrap/dist/css/bootstrap.min.css";
import SignIn from "../modals/SignIn";

import { Link } from "react-router-dom";

const Header = ({ Login }) => {
  const [profileDropdown, setProfileDropdown] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [burgerState, setBurgerState] = useState(false);
  const [selectedNav, setSelectedNav] = useState("HOME");

  const showProfileClass = "d-none";
  function handleNavbar() {
    setBurgerState((prev) => !prev);
  }

  function handleClick(item) {
    setSelectedNav(item);
  }

  function handleSigninBtn() {
    setShowModal(true);
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
              className={`collapse navbar-collapse justify-content-end${
                burgerState ? " show" : ""
              }`}
              //   id="navbarNav"
            >
              <div className={styles.navItemMain}>
                <div className={styles.navItemSubMain}>
                  <div
                    className={styles.navItem}
                    onClick={() => handleClick("HOME")}
                  >
                    <Link className="text-decoration-none" to={"/"}>
                      <a
                        aria-current="page"
                        href="#"
                        className={`${
                          selectedNav === "HOME" ? styles.activeNavItem : ""
                        }`}
                      >
                        HOME
                      </a>
                    </Link>
                  </div>
                  <div
                    className={styles.navItem}
                    onClick={() => handleClick("LISTINGS")}
                  >
                    <Link className="text-decoration-none" to={"/listing"}>
                      <a
                        className={`${
                          selectedNav === "LISTINGS" ? styles.activeNavItem : ""
                        }`}
                        href="#"
                      >
                        LISTINGS
                      </a>
                    </Link>
                  </div>
                  <div
                    className={styles.navItem}
                    onClick={() => handleClick("ORDER")}
                  >
                    <Link className="text-decoration-none" to={"/order"}>
                      <a
                        href="#"
                        className={`${
                          selectedNav === "ORDER" ? styles.activeNavItem : ""
                        }`}
                      >
                        ORDERS
                      </a>
                    </Link>
                  </div>
                  <div
                    className={styles.navItem}
                    onClick={() => handleClick("ABOUT")}
                  >
                    <Link className="text-decoration-none" to={"/about"}>
                      <a
                        href="#"
                        className={`${
                          selectedNav === "ABOUT" ? styles.activeNavItem : ""
                        }`}
                      >
                        ABOUT
                      </a>
                    </Link>
                  </div>
                  <div
                    className={styles.navItem}
                    onClick={() => handleClick("CONTACT")}
                  >
                    <Link className="text-decoration-none" to={"/contact"}>
                      <a
                        href="#"
                        className={`${
                          selectedNav === "CONTACT" ? styles.activeNavItem : ""
                        }`}
                      >
                        CONTACT
                      </a>
                    </Link>
                  </div>

                  {!Login && (
                    <div className={styles.navBtnMain}>
                      <Link className="text-decoration-none" to={"/SignIn"}>
                        <LoginButton
                          buttonText="Log in / Sign Up"
                          fontSize="14px"
                          onClick={handleSigninBtn}
                        />
                      </Link>
                    </div>
                  )}

                  {Login && (
                    <div className={styles.navProfileMain}>
                      <div
                        onClick={() => setProfileDropdown((preVal) => !preVal)}
                        className={styles.navProfileCon}
                      >
                        <div
                          className={styles.navItem}
                          onClick={() => handleClick("profile")}
                        >
                          <a
                            href="#"
                            className={`${
                              selectedNav === "profile"
                                ? styles.activeNavItem
                                : ""
                            }`}
                          >
                            Harley Quinn
                            <img
                              className={styles.navImg}
                              src={NavImg}
                              alt=""
                            />
                            <img
                              className={styles.navIcon}
                              src={NavIcon}
                              alt=""
                            />
                          </a>
                        </div>
                      </div>

                      <div
                        className={`${styles.listingFilterMain} ${
                          !profileDropdown && showProfileClass
                        }`}
                      >
                        <div className={styles.headerDropList}>
                          <ul className={styles.dropdownClass}>
                            <Link
                              className="text-decoration-none"
                              to={"/profile"}
                            >
                              <li>
                                <img
                                  className={styles.navDropIcon}
                                  src={UserIcon}
                                  alt=""
                                />
                                PROFILE
                              </li>
                            </Link>
                            <Link
                              className="text-decoration-none"
                              to={"/notification"}
                            >
                              <li>
                                <img
                                  className={styles.navDropIcon}
                                  src={BellIcn}
                                  alt=""
                                />
                                NOTIFICATION
                              </li>
                            </Link>
                            <Link
                              className="text-decoration-none"
                              to={"/settings"}
                            >
                              <li>
                                <img
                                  className={styles.navDropIcon}
                                  src={SettingIcon}
                                  alt=""
                                />
                                SETTINGS
                              </li>
                            </Link>
                            <Link
                              className="text-decoration-none"
                              to={"/Ticket"}
                            >
                              <li>
                                <img
                                  className={styles.navDropIcon}
                                  src={SettingIcon}
                                  alt=""
                                />
                                TICKETS
                              </li>
                            </Link>
                            {/* <Link className="text-decoration-none" to={"/"}> */}
                            <li>
                              <img
                                className={styles.navDropIcon}
                                src={LogOutIcon}
                                alt=""
                              />
                              LOGOUT
                            </li>
                            {/* </Link> */}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* {showModal && (
        <PopUpModal
          open={showModal}
          onClose={() => setShowModal(false)}
          heading="Signin"
          hidden={false}
          buttonText="Signin"
          width="450px !important"
          children={<SignIn />}
        ></PopUpModal>
      )} */}
    </div>
  );
};

export default Header;
