import React from "react";
import OtpInput from "react-otp-input";
import styles from "./Oto.module.css";
import LoginButton from "../buttons/LoginButton";
import { useState } from "react";

const Oto = ({ openNewPasswordModale }) => {
  const [otp, setOtp] = useState("");

  function moveBack() {
    // Add your code for the moveBack function
  }

  function OtoConfirm() {
    // Add your code for the OtoConfirm function
  }

  const handleOtpChange = (value) => {
    setOtp(value);
  };

  return (
    <div className={styles.Oto}>
      <div className={styles.OtoMain}>
        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={4}
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input {...props} />}
          inputStyle={{
            width: "60px",
            height: "60px",
            margin: "10px",
            fontSize: "24px",
            borderRadius: "4px",
            border: "2px solid #FFAE1B",
            background: "#4A4A4A",
            color: "#FFAE1B",
          }}
        />
        <div className={styles.otpQuri}>
          Didn’t get a code?<span> Click to resend.</span>
        </div>
      </div>
      <div className={styles.BtnDiv}>
        <LoginButton
          buttonText="Back"
          fontSize="16px"
          borderColor="1px solid var(--border-light-grey1-color) "
          backgroundColor="var(--white-color)"
          onClick={moveBack}
        />
        {/* <OtpInput
          value={otp}
          onChange={handleOtpChange}
          numInputs={4}
          separator={<span>-</span>}
          renderInput={(props) => <input {...props} />}
          inputStyle={{
            width: "60px",
            height: "60px",
            margin: "10px",
            fontSize: "24px",
            borderRadius: "4px",
            border: "2px solid #FFAE1B",
            color: "#FFAE1B",
          }}
        /> */}

        <LoginButton
          buttonText="Confirm"
          fontSize="16px"
          borderColor="1px solid var(--border-dark-yellow1-color) "
          onClick={() => openNewPasswordModale()}
        />
      </div>
    </div>
  );
};

export default Oto;
