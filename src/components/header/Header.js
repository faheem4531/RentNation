import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import styles from "./Header.module.css";
import ForgetPassword from "../modals/ForgetPassword";
import SignUp from "../modals/SignUp";
import Address from "../modals/Address";
import OTP from "../modals/Oto";
import UpdatePassword from "../modals/UpdatePasward";

import logo from "../../images/homepage/svgs/logo.svg";
import LoginButton from "../buttons/LoginButton";
import NavImg from "../../assets/pngs/profileImg.png";
import NavIcon from "../../assets/pngs/navIcon.png";
import BellIcn from "../../assets/pngs/bell.png";
import UserIcon from "../../assets/pngs/user.png";
import SettingIcon from "../../assets/pngs/settings.png";
import TicketsIcon from "../../assets/svgs/list-ticket-icon.svg";
import LogOutIcon from "../../assets/pngs/logOut.png";

import {
  updateSignupMode,
  updateAddressMode,
  updateSigninMode,
  updateForgetMode,
} from "../../store/reducers/AdditionalUserReducer";
import PopUpModal from "../modals/PopUpModal";
import "bootstrap/dist/css/bootstrap.min.css";
import SignIn from "../modals/SignIn";

const Header = ({ selectedNav }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { addressModel, signupModel, signinModel, forgetModal } = useSelector(
    (state) => state.AdditionalUserReducer
  );

  const [login, setLogin] = useState(false);
  const { loading } = useSelector((state) => state.auth);
  const [profileDropdown, setProfileDropdown] = useState(false);
  const [showOTPModal, setShowOTPModal] = useState(false);
  const [showNewPasswordModal, setShowNewPasswordModal] = useState(false);
  const [burgerState, setBurgerState] = useState(false);

  const profile = useSelector((state) => state?.auth?.data?.user);

  const showProfileClass = "d-none";
  function handleNavbar() {
    setBurgerState((prev) => !prev);
  }

  function handleClick(item) {
    // setSelectedNav(item);
  }

  function logout() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userId");
    navigate("/");
  }
  const data = localStorage.getItem("accessToken");

  useEffect(() => {
    const data = localStorage.getItem("accessToken");
    if (data) {
      setLogin(true);
    } else setLogin(false);
  }, [login, dispatch, data]);

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

                  {login ? (
                    <div className={styles.navProfileMain}>
                      <div
                        onClick={() => setProfileDropdown((preVal) => !preVal)}
                        className={styles.navProfileCon}>
                        <div
                          className={styles.navItem}
                          onClick={() => handleClick("profile")}>
                          <a
                            href="/profile"
                            className={`${
                              selectedNav === "profile"
                                ? styles.activeNavItem
                                : ""
                            }`}>
                            {profile && profile?.name}
                            <img
                              className={styles.navImg}
                              src={NavImg}
                              alt=""
                            />
                          </a>
                          <img
                            className={styles.navIcon}
                            src={NavIcon}
                            alt=""
                          />
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
                            <li onClick={() => logout()}>
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
                  ) : (
                    <div className={styles.navBtnMain}>
                      <LoginButton
                        laoding={loading}
                        buttonText="Log in / Sign Up"
                        fontSize="14px"
                        onClick={openSigninModal}
                      />
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
