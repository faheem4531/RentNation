import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

import { forgetAction } from "../../store/thunk/AuthThunk";
import { updatePassword } from "../../store/reducers/AdditionalUserReducer";
import styles from "./ForgetPassword.module.css";
import Input from "../inputs/Input";
import LoginButton from "../buttons/LoginButton";

const ForgetPassword = ({ openOTPModal, closeModal = () => {} }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.AdditionalUserReducer);

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: (data) => {
      dispatch(forgetAction({ data, closeModal }))
        .unwrap()
        .then((data) => {
          toast("successfully forget password", { type: "success" });
        })
        .catch((error) => {
          toast("Failed to forget", { type: "error" });
        });
    },
    validationSchema: Yup.object({
      password: Yup.string().required("Email is required"),
    }),
  });

  return (
    <div>
      <div className={styles.ForgetPassword}>
        <Input
          label="Email*"
          type="email"
          name="email"
          placeholder="Enter your email"
          value={user?.email}
          formik={formik}
          setValue={(email) => dispatch(updatePassword(email))}
        />
      </div>
      <div className="mt-5">
        <LoginButton
          buttonText="Confirm"
          fontSize="14px"
          borderColor="1px solid var(--border-dark-yellow1-color)"
          onClick={() => openOTPModal()}
        />
      </div>
    </div>
  );
};

export default ForgetPassword;
