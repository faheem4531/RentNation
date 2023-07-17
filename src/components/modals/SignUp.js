import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signupAction } from "../../store/thunk/SignupThunk";

import styles from "./SignIn.module.css";
import Input from "../inputs/Input";
import LoginButton from "../buttons/LoginButton";
import OtherSignup from "../buttons/OtherSignup";

import Apple from "../../assets/svgs/apple-icon.svg";
import Google from "../../assets/svgs/google-icon.svg";
import Fb from "../../assets/svgs/fb-icon.svg";

const SignUp = () => {
  function handleOtherSignups() {}

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    dispatch(signupAction({ data: { name, email, password }, navigate }));
  };

  return (
    <div className={styles.signIn}>
      <div className={styles.inputs}>
        <Input
          label="Name*"
          type="text"
          placeholder="Enter your email"
          value={name}
          setValue={setName}
        />
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
          placeholder="Create a password"
          value={password}
          setValue={setPassword}
        />
      </div>
      <div className={styles.forgetContent}>
        <div>Must be at least 8 characters.</div>
      </div>
      <div className={styles.modalButton}>
        <LoginButton
          buttonText="Sign Up"
          fontSize="14px"
          borderColor="1px solid var(--border-dark-yellow1-color) "
          onClick={handleSignup}
        />
      </div>
      <div className={styles.signUpContent}>
        <div>Already Have an account</div>
        <a className={styles.signUp}>Login</a>
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

export default SignUp;
