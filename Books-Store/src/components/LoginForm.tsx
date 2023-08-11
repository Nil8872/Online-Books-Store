import "../index.css";
import styles from "../styles/loginOrReg.module.css";
import { useFormik } from "formik";
import {useNavigate} from "react-router-dom";
import * as Yup from "yup";
import {toast, ToastContainer,ToastOptions} from "react-toastify"
// import axios from "axios";

import {useContext} from "react";
import { UserContext } from "../context/User";


type InputData = {
  email: string;
  password: string;
};



const initialValues: InputData = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string().email().required("Please enter email address!"),
  password: Yup.string().required("Please enter password!"),
})

const LoginForm: React.FC = () => {

  const {setUser} = useContext(UserContext);

  const navigate = useNavigate();
  const { handleChange, handleSubmit, handleBlur, values, touched, errors } = useFormik({
    initialValues,
    onSubmit: async() => {
       
      setUser(values);

    },
    validationSchema
  });


 const handleCreateAnAccount =()=>{
    navigate("/register");
 }

  return (
    <div className="container">
      <ToastContainer/>
            <div className={`row ${styles.mainForm}`}>
        <div className={`row-item`}>
          <p className={`${styles.bottomBorder}`}>New Customer</p>
          <p className={styles.info}>Registeration is free and easy.</p>

          <li className={styles.li}>Faster checkout</li>
          <li className={styles.li}>Save multiple shipping addresses</li>
          <li className={styles.li}>View and track orders and more</li>

          <button
            className={styles.Btn}
            style={{ marginTop: "150px", width: "220px" }}
            onClick={handleCreateAnAccount}
          >
            Create an Account
          </button>
        </div>
        <div className={`row-item`}>
          <p className={`${styles.bottomBorder}`}>Registered Customer</p>
          <p className={styles.info}>
            If you have an account with us, please log in.
          </p>
          <form action="" method="post" onSubmit={handleSubmit}>
            <div className="row-column">
              <div style={{ marginBottom: "40px" }}>
                <div className={styles.inputName}>Email Address*</div>

                <input
                  className="input"
                  type="email"
                  name="email"
                  style={{ width: "80%" }}
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email ? <div className="error">{errors.email}</div> : null}
              </div>
              <div style={{ marginBottom: "53px" }}>
                <div className={styles.inputName}>Password*</div>
                <input
                  className="input"
                  type="password"
                  name="password"
                  style={{ width: "80%" }}
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete="off"
                />
                {errors.password && touched.password ? <div className="error">{errors.password}</div>: null}
              </div>
              <button
                type="submit"
                className={styles.Btn}
                style={{ width: "100px" }}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
