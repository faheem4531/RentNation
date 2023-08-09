import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

import styles from "./EditPassword.module.css";
import { Header } from "../../components";
import Input from "../../components/inputs/Input";
import LoginButton from "../../components/buttons/LoginButton";
import { resetPassseord } from "../../store/thunk/ProfileThunk";

import bgLeft from "../../assets/pngs/bg-leftHalf.png";

const EditPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.profile);

  const formik = useFormik({
    initialValues: {
      oldPassword: "",
      newPassword: "",
      confirmPasswrod: "",
    },
    onSubmit: (data) => {
      dispatch(resetPassseord({ data, navigate }));
    },
    validationSchema: Yup.object({
      oldPassword: Yup.string()
        .required("Old Password is required")
        .min(8, "Password should be 8 characters long"),
      newPassword: Yup.string()
        .required("New Password is required")
        .min(8, "Password should be 8 characters long"),
      confirmPasswrod: Yup.string()
        .required("Confirm Password is required")
        .min(8, "Password should be 8 characters long"),
    }),
  });

  return (
    <div className={styles.addTicket}>
      <Header Login={true} selectedNav={"profile"} />
      <div className={styles.content}>
        <div className={styles.profileHeading}>
          <div>Edit Password</div>
          <div className={styles.subHeading}>Edit Your Password</div>
        </div>
        <div className={styles.profileImgNameMainCon}>
          <Input
            label={"Old Password"}
            type={"password"}
            backgroundColor={"var(--bg-grey4-dark-color)"}
            placeholder={"Enter old password"}
            mbLabel={"6px"}
            inputFont={"16px"}
            formik={formik}
            name="oldPassword"
          />
          <Input
            label={"New Password"}
            type={"password"}
            backgroundColor={"var(--bg-grey4-dark-color)"}
            placeholder={"Enter new password"}
            inputFont={"16px"}
            formik={formik}
            name="newPassword"
          />
          <Input
            label={"Confirm New Password"}
            type={"password"}
            backgroundColor={"var(--bg-grey4-dark-color)"}
            placeholder={"Confirm New Password"}
            formik={formik}
            name="confirmPasswrod"
          />
          <div className={styles.submitButton}>
            <LoginButton
              loading={loading}
              onClick={formik.handleSubmit}
              borderColor={"1px solid var(--border-dark-yellow1-color)"}
              buttonText={"Submit"}
              fontSize={"16px"}
            />
          </div>
        </div>
      </div>
      <div className={styles.notifiBgImgCon}>
        <img className={styles.notifiBgImg} src={bgLeft} alt="" />
      </div>
    </div>
  );
};

export default EditPassword;
