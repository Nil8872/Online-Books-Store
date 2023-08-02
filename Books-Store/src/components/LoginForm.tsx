import "../index.css";
import styles from "../styles/loginOrReg.module.css";
import { useState } from "react";

type InputeData = {
  email: string;
  password: string;
};

const LoginForm: React.FC = () => {
  const [inputData, setInputData] = useState<InputeData>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <div className={`row ${styles.mainForm}`}>
        <div className={`row-item`} >
          <p className={`${styles.bottomBorder}`}>New Customer</p>
          <p className={styles.info}>Registeration is free and easy.</p>

          <li className={styles.li}>Faster checkout</li>
          <li className={styles.li}>Save multiple shipping addresses</li>
          <li className={styles.li}>View and track orders and more</li>

          <button className={styles.Btn} style={{ marginTop: "150px", width:"220px" }}>
            Create an Account
          </button>
        </div>
        <div className={`row-item`}>
          <p className={`${styles.bottomBorder}`}>Registered Customer</p>
          <p className={styles.info}>
            If you have an account with us, please log in.
          </p>
          <div className="row-column">
            <div  style={{marginBottom:"40px"}}>
              <div className={styles.inputName} >Email Address*</div>

              <input
                className="input"
                type="email"
                name="email"
                style={{width: "80%"}}
                value={inputData.email}
                onChange={handleChange}
              />
            </div>
            <div  style={{marginBottom:"53px"}}>
              <div className={styles.inputName}>Password*</div>
              <input
                className="input"
                type="password"
                name="password"
                style={{width: "80%"}}
                value={inputData.password}
                onChange={handleChange}
              />
            </div>
            <button className={styles.Btn} style={{width:"100px"}} >Login</button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
