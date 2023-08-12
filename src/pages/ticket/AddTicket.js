import React from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";

import styles from "./AddTicket.module.css";
import { Header } from "../../components";
import Input from "../../components/inputs/Input";
import Textarea from "../../components/textarea/Textarea";
import LoginButton from "../../components/buttons/LoginButton";
import { addTicket } from "../../store/thunk/ProfileThunk";

import bgLeft from "../../assets/pngs/bg-leftHalf.png";

const AddTicket = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      department: "",
      subject: "",
      description: "",
    },
    onSubmit: (data) => {
      dispatch(addTicket(data));
    },
    validationSchema: Yup.object({
      department: Yup.string().required("Department is required"),
      subject: Yup.string().required("Subject is required"),
      description: Yup.string().required("Description is required"),
    }),
  });

  return (
    <div>
      <Header Login={true} selectedNav={"profile"} />
      <div className={styles.content}>
        <div className={styles.profileHeading}>Add Tickets</div>
        <div className={styles.profileImgNameMainCon}>
          <Input
            borderRadius={"20px"}
            label={"Department"}
            type={"text"}
            backgroundColor={"var(--bg-grey4-dark-color)"}
            placeholder={"Sales"}
            mbLabel={"20px"}
            padding={"18px 16px"}
            lableFont={"22px"}
            inputFont={"16px"}
            formik={formik}
            name="department"
          />
          <Input
            borderRadius={"20px"}
            label={"Subject"}
            type={"text"}
            backgroundColor={"var(--bg-grey4-dark-color)"}
            placeholder={"Subject"}
            padding={"18px 16px"}
            mbLabel={"20px"}
            lableFont={"22px"}
            inputFont={"16px"}
            formik={formik}
            name="subject"
          />
          <Textarea
            placeholder={"Description"}
            lable={"Description"}
            borderRadius={"20px"}
            height={"170px"}
            backgroundColor={"var(--bg-grey4-dark-color)"}
            mbLabel={"20px"}
            lableFont={"22px"}
            inputFont={"16px"}
            formik={formik}
            name="description"
          />
          <div className={styles.submitButton}>
            <LoginButton
              onClick={formik.handleSubmit}
              borderColor={"1px solid var(--border-dark-yellow1-color)"}
              buttonText={"Submit"}
              width={"350px"}
              fontSize={"16px"}
              borderRadius={"8px"}
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

export default AddTicket;
