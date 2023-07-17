import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginAction } from "../../store/thunk/LoginThunk";

import styles from "./SignIn.module.css";
import Input from "../inputs/Input";
import LoginButton from "../buttons/LoginButton";
import OtherSignup from "../buttons/OtherSignup";

import Apple from "../../assets/svgs/apple-icon.svg";
import Google from "../../assets/svgs/google-icon.svg";
import Fb from "../../assets/svgs/fb-icon.svg";

const SignIn = ({ openNextModal, openForgetModal }) => {
  function handleOtherSignups() {}

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    dispatch(loginAction({ data: { email, password }, navigate }));
  };

  return (
    <div className={styles.signIn}>
      <div className={styles.inputs}>
        <Input
          label="Email*"
          type="email"
          placeholder="Enter your email"
          value={email}
          setValue={setEmail}
        />
        <Input
          label="Password*"
          type="password"
          placeholder="Enter your password"
          value={password}
          setValue={setPassword}
        />
      </div>
      <div className={styles.forgetContent}>
        <div>Must be at least 8 characters.</div>
        <a className={styles.forgetPass} onClick={() => openForgetModal()}>
          Forgot Password?
        </a>
      </div>
      <div className={styles.modalButton}>
        <LoginButton
          buttonText="SignIn"
          fontSize="14px"
          borderColor="1px solid var(--border-dark-yellow1-color) "
          onClick={handleLogin}
        />
      </div>
      <div className={styles.signUpContent}>
        <div>New to Rentnation?</div>
        <a className={styles.signUp} onClick={() => openNextModal()}>
          Sign Up
        </a>
      </div>
      <div className={styles.oRLine}>
        <div className={styles.leftLine}></div>
        <div>OR</div>
        <div className={styles.rightLine}></div>
      </div>
      <div className={styles.socialMediaBtns}>
        <OtherSignup
          text={"Sign up with Google"}
          icon={Google}
          onClick={handleOtherSignups}
        />
        <OtherSignup
          text={"Sign up with Facebook"}
          icon={Fb}
          onClick={handleOtherSignups}
        />
        <OtherSignup
          text={"Sign up with Apple"}
          icon={Apple}
          onClick={handleOtherSignups}
        />
      </div>
    </div>
  );
};

export default SignIn;
