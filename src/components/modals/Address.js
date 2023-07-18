import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateCity, updateCountry, updatePassword, updateState } from "../../store/reducers/AdditionalUserReducer";

import { signupAction } from "../../store/thunk/SignupThunk";
import styles from "./Address.module.css";
import Input from "../inputs/Input";
import LoginButton from "../buttons/LoginButton";

const AddressModal = ({route}) => {
  // const {name,email,password} = route.params;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const [country, setCountry] = useState("");
  // const [city, setCity] = useState("");
  // const [state, setState] = useState("");

  const user = useSelector((state) => state.AdditionalUserReducer);
  // const city = useSelector((state) => state.AdditionalUserReducer.city);
  // const state = useSelector((state) => state.AdditionalUserReducer.state);

  const handleSignUpApis = () => {
    // dispatch(signupAction({ data: { name, email, password, country, email, password }, navigate }));
  };

  return (
    <div>
      <div className={styles.AddressModal}>
        <Input 
        label="Country*" 
        type="text"
        value={user.country}
        setValue={(country)=>dispatch(updateCountry(country))} 
        placeholder="Enter your country" 
        />

        <Input 
        label="City*" 
        type="text"
        value={user.city}
        setValue={(country)=>dispatch(updateCity(country))}  
        placeholder="Enter your City" 
        />

        <Input 
        label="State*" 
        type="text" 
        value={user.state}
        setValue={(state)=>dispatch(updateState(state))}
        placeholder="Enter your State" 
        />
      </div>

      <div className="mt-5">
        <LoginButton
          buttonText="Continue"
          fontSize="14px"
          borderColor="1px solid var(--border-dark-yellow1-color)"
          onClick={handleSignUpApis}
        />
      </div>
    </div>
  );
};

export default AddressModal;
