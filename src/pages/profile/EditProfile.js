import React from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { editProfile } from "../../store/thunk/ProfileThunk";

import styles from "./EditProfile.module.css";
import { Header } from "../../components";
import Input from "../../components/inputs/Input";
import Textarea from "../../components/textarea/Textarea";
import LoginButton from "../../components/buttons/LoginButton";
import bgLeft from "../../assets/pngs/bg-leftHalf.png";

const EditProfile = () => {
  const location = useLocation();
  const userData = location.state.profile;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: userData?.name,
      email: userData?.email,
      bio: userData?.profile?.bio,
    },
    onSubmit: (data) => {
      dispatch(editProfile({ data, navigate }));
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().required("Email is required"),
      bio: Yup.string().required("Bio is required"),
    }),
  });

  return (
    <div className={styles.addTicket}>
      <Header Login={true} selectedNav={"profile"} />
      <div className={styles.content}>
        <div className={styles.profileHeading}>
          <div>Edit Profile</div>
          <div className={styles.subHeading}>Edit your profile information</div>
        </div>
        <div className={styles.profileImgNameMainCon}>
          <Input
            label={"Name*"}
            type={"text"}
            backgroundColor={"var(--bg-grey4-dark-color)"}
            placeholder={"Edit your name"}
            inputFont={"16px"}
            name="name"
            formik={formik}
          />
          <Input
            label={"Email*"}
            type={"text"}
            backgroundColor={"var(--bg-grey4-dark-color)"}
            placeholder={"Edit your email"}
            inputFont={"16px"}
            name="email"
            formik={formik}
          />
          <Textarea
            placeholder={"About"}
            lable={"Edit your about"}
            height={"170px"}
            backgroundColor={"var(--bg-grey4-dark-color)"}
            inputFont={"16px"}
            name="bio"
            formik={formik}
          />
          <div className={styles.submitButton}>
            <LoginButton
              onClick={formik.handleSubmit}
              borderColor={"1px solid var(--border-dark-yellow1-color)"}
              buttonText={"Submit"}
              borderRadius={"8px"}
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

export default EditProfile;
