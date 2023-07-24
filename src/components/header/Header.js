import React, { useState } from "react";
import styles from "./Header.module.css";

import logo from "../../images/homepage/svgs/logo.svg";
import LoginButton from "../buttons/LoginButton";
import NavImg from "../../assets/pngs/profileImg.png";
import NavIcon from "../../assets/pngs/navIcon.png";
import BellIcn from "../../assets/pngs/bell.png";
import UserIcon from "../../assets/pngs/user.png";
import SettingIcon from "../../assets/pngs/settings.png";
import TicketsIcon from "../../assets/svgs/list-ticket-icon.svg";
import LogOutIcon from "../../assets/pngs/logOut.png";
import ForgetPassword from "../modals/ForgetPassword";
import SignUp from "../modals/SignUp";
import Address from "../modals/Address";
import OTP from "../modals/Oto";
import UpdatePassword from "../modals/UpdatePasward";

import {
  updateSignupMode,
  updateAddressMode,
  updateSigninMode,
  updateForgetMode,
} from "../../store/reducers/AdditionalUserReducer";
import PopUpModal from "../modals/PopUpModal";
import "bootstrap/dist/css/bootstrap.min.css";
import SignIn from "../modals/SignIn";

import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { setIsLoggedIn } from "../../store/reducers/AuthenticationReducer";

const Header = ({ Login, selectedNav }) => {
  const dispatch = useDispatch();
  const { addressModel, signupModel, signinModel, forgetModal } = useSelector(
    (state) => state.AdditionalUserReducer
  );

  const [profileDropdown, setProfileDropdown] = useState(false);
  const [showOTPModal, setShowOTPModal] = useState(false);
  const [showNewPasswordModal, setShowNewPasswordModal] = useState(false);
  const [burgerState, setBurgerState] = useState(false);
  // const [selectedNav, setSelectedNav] = useState("HOME");

  const showProfileClass = "d-none";
  function handleNavbar() {
    setBurgerState((prev) => !prev);
  }

  function handleClick(item) {
    // setSelectedNav(item);
  }

  function closeSigninModal() {
    dispatch(updateSigninMode(false));
  }

  function openSigninModal() {
    dispatch(updateSigninMode(true));
  }

  function openForgetModal() {
    dispatch(updateForgetMode(true));
  }

  function closeForgetModal() {
    dispatch(updateForgetMode(false));
  }

  function openSignupModal() {
    dispatch(updateSignupMode(true));
  }

  function closeSignupModal() {
    dispatch(updateSignupMode(false));
  }

  function openAddressModel() {
    dispatch(updateAddressMode(true));
  }

  function closeAddressModel() {
    dispatch(updateAddressMode(false));
  }

  // function handleSignUpBtn() {
  //   closeSigninModal();
  //   dispatch(updateSignupMode(true));
  // }

  // function handleAddressBtn() {
  //   dispatch(updateSignupMode(false));
  //   dispatch(updateAddressMode(true));
  // }

  function handleOTPBtn() {
    closeForgetModal();
    setShowOTPModal(true);
  }

  function handleNewPasswordBtn() {
    setShowOTPModal(false);
    setShowNewPasswordModal(true);
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
                onClick={handleNavbar}>
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
                    onClick={() => handleClick("HOME")}>
                    <Link className="text-decoration-none" to={"/"}>
                      <a
                        aria-current="page"
                        href="home"
                        className={`${
                          selectedNav === "HOME" ? styles.activeNavItem : ""
                        }`}>
                        HOME
                      </a>
                    </Link>
                  </div>
                  <div
                    className={styles.navItem}
                    onClick={() => handleClick("LISTINGS")}>
                    <Link className="text-decoration-none" to={"/listing"}>
                      <a
                        className={`${
                          selectedNav === "LISTINGS" ? styles.activeNavItem : ""
                        }`}
                        href="listing">
                        LISTINGS
                      </a>
                    </Link>
                  </div>
                  <div
                    className={styles.navItem}
                    onClick={() => handleClick("ORDER")}>
                    <Link className="text-decoration-none" to={"/order"}>
                      <a
                        href="orders"
                        className={`${
                          selectedNav === "ORDER" ? styles.activeNavItem : ""
                        }`}>
                        ORDERS
                      </a>
                    </Link>
                  </div>
                  <div
                    className={styles.navItem}
                    onClick={() => handleClick("ABOUT")}>
                    <Link className="text-decoration-none" to={"/about"}>
                      <a
                        href="about"
                        className={`${
                          selectedNav === "ABOUT" ? styles.activeNavItem : ""
                        }`}>
                        ABOUT
                      </a>
                    </Link>
                  </div>
                  <div
                    className={styles.navItem}
                    onClick={() => handleClick("CONTACT")}>
                    <Link className="text-decoration-none" to={"/contact"}>
                      <a
                        href="contact"
                        className={`${
                          selectedNav === "CONTACT" ? styles.activeNavItem : ""
                        }`}>
                        CONTACT
                      </a>
                    </Link>
                  </div>

                  {!Login && (
                    <div className={styles.navBtnMain}>
                      <LoginButton
                        buttonText="Log in / Sign Up"
                        fontSize="14px"
                        onClick={openSigninModal}
                      />
                    </div>
                  )}

                  {Login && (
                    <div className={styles.navProfileMain}>
                      <div
                        onClick={() => setProfileDropdown((preVal) => !preVal)}
                        className={styles.navProfileCon}>
                        <div
                          className={styles.navItem}
                          onClick={() => handleClick("profile")}>
                          <a
                            href="profile"
                            className={`${
                              selectedNav === "profile"
                                ? styles.activeNavItem
                                : ""
                            }`}>
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
                        }`}>
                        <div className={styles.headerDropList}>
                          <ul className={styles.dropdownClass}>
                            <Link
                              className="text-decoration-none"
                              to={"/profile"}>
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
                              to={"/notification"}>
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
                              to={"/settings"}>
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
                              to={"/Ticket"}>
                              <li>
                                <img
                                  className={styles.navDropIcon}
                                  src={TicketsIcon}
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
      {signinModel && (
        <PopUpModal
          open={signinModel}
          onClose={closeSigninModal}
          heading="Sign In"
          hidden={false}
          buttonText="Sign In"
          width="450px !important"
          children={
            <SignIn
              openForgetModal={() => {
                openForgetModal();
                closeSigninModal();
              }}
              closeModal={closeSigninModal}
              openSignupModal={() => {
                openSignupModal();
                closeSigninModal();
              }}
            />
          }></PopUpModal>
      )}
      {signupModel && (
        <PopUpModal
          open={signupModel}
          onClose={closeSignupModal}
          heading="Sign Up"
          hidden={false}
          buttonText="Sign Up"
          width="450px !important"
          children={
            <SignUp
              openSigninModal={() => {
                openSignupModal();
                closeSigninModal();
              }}
              openAddressModal={() => {
                openAddressModel();
                closeSignupModal();
              }}
            />
          }></PopUpModal>
      )}
      {forgetModal && (
        <PopUpModal
          open={forgetModal}
          onClose={closeForgetModal}
          heading="Forget Password"
          hidden={false}
          buttonText="ForgetPassword"
          width="450px !important"
          children={
            <ForgetPassword openOTPModal={() => handleOTPBtn()} />
          }></PopUpModal>
      )}
      {addressModel && (
        <PopUpModal
          open={addressModel}
          onClose={closeAddressModel}
          heading="Address"
          hidden={false}
          buttonText="Continue"
          width="450px !important"
          children={<Address closeModal={closeAddressModel} />}></PopUpModal>
      )}
      {showOTPModal && (
        <PopUpModal
          open={showOTPModal}
          onClose={() => setShowOTPModal(false)}
          heading="OTP"
          hidden={false}
          buttonText="Continue"
          width="400px !important"
          children={
            <OTP openNewPasswordModale={() => handleNewPasswordBtn()} />
          }></PopUpModal>
      )}
      {showNewPasswordModal && (
        <PopUpModal
          open={showNewPasswordModal}
          onClose={() => setShowNewPasswordModal(false)}
          heading="Update Password"
          hidden={false}
          buttonText="Update Password"
          width="400px !important"
          children={<UpdatePassword />}></PopUpModal>
      )}
    </div>
  );
};

export default Header;
