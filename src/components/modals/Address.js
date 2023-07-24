import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import {
  updateCity,
  updateCountry,
  updateState,
} from "../../store/reducers/AdditionalUserReducer";
import styles from "./Address.module.css";
import Input from "../inputs/Input";
import LoginButton from "../buttons/LoginButton";
import { addressAction } from "../../store/thunk/AuthThunk";

const AddressModal = ({ closeModal = () => {} }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.AdditionalUserReducer);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      country: "",
      city: "",
      state: "",
      role: "USER",
    },
    onSubmit: (data) => {
      dispatch(
        addressAction({
          data: {
            ...data,
            name: user.name,
            email: user.email,
            password: user.password,
          },
          navigate,
          closeModal,
        })
      )
        .unwrap()
        .then((data) => {
          toast("Successfully signup", { type: "success" });
        })
        .catch((error) => {
          toast("Failed to signup", { type: "error" });
        });
    },
    validationSchema: Yup.object({
      country: Yup.string().required("Country is required"),
      city: Yup.string().required("City is required"),
      state: Yup.string().required("State is required"),
    }),
  });

  return (
    <div>
      <div className={styles.AddressModal}>
        <Input
          label="Country*"
          type="text"
          name="country"
          formik={formik}
          value={user.country}
          setValue={(country) => dispatch(updateCountry(country))}
          placeholder="Enter your country"
        />

        <Input
          label="City*"
          type="text"
          name="city"
          formik={formik}
          value={user.city}
          setValue={(city) => dispatch(updateCity(city))}
          placeholder="Enter your City"
        />

        <Input
          label="State*"
          type="text"
          name="state"
          formik={formik}
          value={user.state}
          setValue={(state) => dispatch(updateState(state))}
          placeholder="Enter your State"
        />
      </div>

      <div className="mt-5">
        <LoginButton
          buttonText="Continue"
          fontSize="14px"
          borderColor="1px solid var(--border-dark-yellow1-color)"
          onClick={formik.handleSubmit}
        />
      </div>
    </div>
  );
};

export default AddressModal;
