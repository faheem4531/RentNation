import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

import styles from "./Contact.module.css";
import { Header, Footer } from "../../components";
import Input from "../../components/inputs/Input";
import Textarea from "../../components/textarea/Textarea";
import LoginButton from "../../components/buttons/LoginButton";
import { contactUs } from "../../store/thunk/ContactUsThunk";

import bgRight from "../../assets/pngs/bg-rightHalf.png";

const Contact = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.contsctUs);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      about: "",
    },
    onSubmit: (data) => {
      dispatch(contactUs({ data }))
        .unwrap()
        .then((data) => {
          toast("Mail send successfully", { type: "success" });
        })
        .catch((error) => {
          toast("Failed to send mail", { type: "error" });
        });
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().required("Email is required"),
      subject: Yup.string().required("Subject is required"),
      about: Yup.string().required("About is required"),
    }),
  });

  return (
    <div>
      <Header Login={false} selectedNav="CONTACT" />
      <div className={styles.contactMain}>
        <div className={styles.contactFormMain}>
          <div className={styles.contactFormHeading}>Contact Us</div>
          <Input
            label="Name*"
            type="text"
            placeholder="EX:Mark odama"
            backgroundColor="#2B2B2B"
            name="name"
            formik={formik}
          />
          <div className="mt-4">
            <Input
              label="Email*"
              type="text"
              placeholder="EX:Markoadama@gmail.com"
              backgroundColor="#2B2B2B"
              name="email"
              formik={formik}
            />
          </div>
          <div className="mt-4">
            <Input
              label="Subject*"
              type="text"
              placeholder="EX:project complain"
              backgroundColor="#2B2B2B"
              name="subject"
              formik={formik}
            />
          </div>
          <div className="mt-4">
            <Textarea
              lable="About*"
              placeholder={"About"}
              height={"150px"}
              backgroundColor={"#2B2B2B"}
              name="about"
              formik={formik}
            />
          </div>
          <div className={styles.contactFormBtn}>
            <LoginButton
              onClick={formik.handleSubmit}
              buttonText="Submit"
              borderRadius="8px"
              width="90%"
              loading={loading}
            />
          </div>
        </div>
      </div>

      <div className={styles.contactFooter}>
        <Footer />
        <div className={styles.contactBgRight}>
          <img src={bgRight} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
