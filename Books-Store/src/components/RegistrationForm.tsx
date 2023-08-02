import { useState } from "react";
import "../index.css";
import styles from "../styles/loginOrReg.module.css";

const RegistrationForm: React.FC = () => {
  const [inputData, setInputData] = useState<{
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    cpassword: string;
  }>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = () => {};

  return (
    <div className="container">

      <div className={styles.mainForm}>
        <p className={styles.title}>Personal Information</p>
        <p className={styles.info}>
          Please enter the following information to create your account
        </p>
      </div>

      <div className={styles.inputeFields}>


        <div className="row" style={{marginBottom:"40px"}}>
          <div className={styles.rowHalf}>
            <div className={styles.inputName}>First Name*</div>
            <input
              className="input"
              type="text"
              name="firstName"
              value={inputData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className={styles.rowHalf}>
            <div className={styles.inputName}>Last Name*</div>
            <input
              className="input"
              type="text"
              name="lastName"
              value={inputData.lastName}
              onChange={handleChange}
            />
          </div>
        </div>

        <div style={{marginBottom:"70px"}}>
          <div className={styles.inputName}>Email *</div>
          <input
            className="input"
            type="email"
            name="email"
            value={inputData.email}
            onChange={handleChange}
          />
        </div>



        <p style={{marginBottom:"10px"}} className={styles.title}>Login Information</p>

        <div className="row" style={{marginBottom:"70px"}} >
          <div className={styles.rowHalf}>
            <div className={styles.inputName}>Password <span className="var(--red)">*</span></div>
            <input
              className="input"
              type="password"
              name="password"
              value={inputData.password}
              onChange={handleChange}
            />
          </div>
          <div className={styles.rowHalf}>
            <div className={styles.inputName}>Confirm Password * </div>
            <input
              className="input"
              type="password"
              name="cpassword"
              value={inputData.cpassword}
              onChange={handleChange}
            />
          </div>
        </div>



        <button
          className="btn"
          style={{ backgroundColor: "var(--red)", height:"45px", borderRadius:"2px", width:"136px", }}
          onClick={handleRegister}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default RegistrationForm;
