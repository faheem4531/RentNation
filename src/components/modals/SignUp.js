import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateName, updateEmail, updatePassword, updateAddressMode } from "../../store/reducers/AdditionalUserReducer";
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
  const user = useSelector((state) => state.AdditionalUserReducer);
  // const email = useSelector((state) => state.AdditionalUserReducer);
  // const password = useSelector((state) => state.AdditionalUserReducer.password);

  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const handleSignup = () => {
    // navigate('', {
    //   name: name,
    //   email: email,
    //   password: password
    // });
    dispatch(updateAddressMode(true));
  };

  // console.log(name, 'namenamename');
  return (
    <div className={styles.signIn}>
      <div className={styles.inputs}>
        <Input
          label="Name*"
          type="text"
          placeholder="Enter your email"
          value={user.name}
          setValue={(name)=>dispatch(updateName(name))}
        />
        <Input
          label="Email*"
          type="email"
          placeholder="Enter your email"
          value={user.email}
          setValue={(email)=>dispatch(updateEmail(email))}
        />
        <Input
          label="Password*"
          type="password"
          placeholder="Create a password"
          value={user.password}
          setValue={(password)=>dispatch(updatePassword(password))}
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
