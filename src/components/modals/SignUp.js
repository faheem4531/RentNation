import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";

import {
  updateName,
  updateEmail,
  updatePassword,
} from "../../store/reducers/AdditionalUserReducer";
import styles from "./SignIn.module.css";
import Input from "../inputs/Input";
import LoginButton from "../buttons/LoginButton";
import OtherSignup from "../buttons/OtherSignup";

import Apple from "../../assets/svgs/apple-icon.svg";
import Google from "../../assets/svgs/google-icon.svg";
import Fb from "../../assets/svgs/fb-icon.svg";

const SignUp = ({ openSigninModal, openAddressModal }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.AdditionalUserReducer);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: () => {
      openAddressModal();
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().required("Email is required"),
      password: Yup.string()
        .required("Password is required")
        .min(8, "Password should be 8 characters long"),
    }),
  });

  return (
    <div className={styles.signIn}>
      <div className={styles.inputs}>
        <Input
          label="Name*"
          type="text"
          name="name"
          placeholder="Enter your email"
          formik={formik}
          value={user.name}
          setValue={(name) => dispatch(updateName(name))}
        />
        <Input
          label="Email*"
          type="email"
          name="email"
          placeholder="Enter your email"
          formik={formik}
          value={user.email}
          setValue={(email) => dispatch(updateEmail(email))}
        />
        <Input
          label="Password*"
          type="password"
          name="password"
          placeholder="Create a password"
          formik={formik}
          value={user.password}
          setValue={(password) => dispatch(updatePassword(password))}
        />
      </div>
      <div className={styles.modalButton}>
        <LoginButton
          buttonText="Sign Up"
          fontSize="14px"
          borderColor="1px solid var(--border-dark-yellow1-color)"
          onClick={formik.handleSubmit}
        />
      </div>
      <div className={styles.signUpContent}>
        <div>Already have an account</div>
        <a onClick={openSigninModal} className={styles.signUp}>
          Login
        </a>
      </div>
      <div className={styles.oRLine}>
        <div className={styles.leftLine}></div>
        <div>OR</div>
        <div className={styles.rightLine}></div>
      </div>
      <div className={styles.socialMediaBtns}>
        <OtherSignup text={"Sign up with Google"} icon={Google} />
        <OtherSignup text={"Sign up with Facebook"} icon={Fb} />
        <OtherSignup text={"Sign up with Apple"} icon={Apple} />
      </div>
    </div>
  );
};

export default SignUp;
