import "../index.css";
import styles from "../styles/loginOrReg.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";  
import {toast, ToastContainer, ToastOptions} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';



 
const toastStyles : ToastOptions<{  position : string,
  autoClose : number,
  closeOnClick : boolean,
  pauseOnHover: boolean,
  draggable: boolean,
  theme : string}> = 
  {
    position: "top-right",
    autoClose: 5000,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "colored",
    }


type InputData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  cpassword: string;
};

type ErrorObject = {
  type: string,
  value: string,
  msg: string,
  path: string,
  location: string
};

type SuccessObject = {
  success: boolean,
  message: string
};
type Data = { errors: ErrorObject[] } | SuccessObject;

const validationSchema =  Yup.object({
  firstName: Yup.string().required("Please enter first name"),
  lastName: Yup.string().required("Please enter last name"),
  email: Yup.string().email().required("Please enter your email address"),
  password: Yup.string().min(8,"password should be minimum 8 number | character").required("Please enter your password"),
  cpassword: Yup.string().min(8, "password should be minimum 8 character").required("Please enter your confirm password")
  .oneOf([Yup.ref("password")], "password must match")

})

const RegistrationForm: React.FC  = ( ) => {
  console.log(import.meta.env._VITE_BASE_URL)
  const navigate = useNavigate();

  
  const initialValues: InputData = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    cpassword: "",
  };

  const { values,
    handleSubmit, 
    handleChange,
    handleBlur,
    touched,
    errors 
  } = useFormik({
    initialValues,
    onSubmit: async(values: InputData) => {

      const options = {
        method : "POST",
        headers:{
          "content-type" : "application/json",

        },
        body: JSON.stringify(values),
      }


      const result  = await fetch(`${import.meta.env.VITE_BASE_URL}/auth/createuser`, options);
       const data : Data = await result.json();
       console.log(data);
      if( data.success === true){
        toast.success(data.message, toastStyles );
          navigate("/login") 
        
      }
      else{
        data.errors.forEach((err: ErrorObject) => {
          toast.error(err.msg, toastStyles);
        });
      }
      
    },
     validationSchema,
    
  });// onReset: (e: React.FormEvent<HTMLFormElement>) => {},

  return (
    <div className="container"> 
      <div className={styles.mainForm}>
        <p className={styles.title}>Personal Information</p>
        <p className={styles.info}>
          Please enter the following information to create your account
        </p>
      </div>

      <div className={styles.inputeFields}>
        <form action="" method="post" onSubmit={handleSubmit}>
          <div className="row" style={{ marginBottom: "40px" }}>
            <div className={styles.rowHalf}>
              <div className={styles.inputName}>First Name*</div>
              <div style={{display:"flex", flexDirection:"column"}}>

              </div>
              <input
                className="input"
                type="text"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            {errors.firstName && touched.firstName ? <div className="error">{errors.firstName}</div> : null }
            </div>
            <div className={styles.rowHalf}>
              <div className={styles.inputName}>Last Name*</div>
              <input
                className="input"
                type="text"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.lastName && touched.lastName ? <div className="error">{errors.lastName}</div> : null }
            </div>
          </div>

          <div style={{ marginBottom: "70px" }}>
            <div className={styles.inputName}>Email *</div>
            <input
              className="input"
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email ? <div className="error">{errors.email}</div> : null }
          </div>

          <p style={{ marginBottom: "10px" }} className={styles.title}>
            Login Information
          </p>

          <div className="row" style={{ marginBottom: "70px" }}>
            <div className={styles.rowHalf}>
              <div className={styles.inputName}>
                Password <span className="var(--red)">*</span>
              </div>
              <input
                className="input"
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="off"
              />
              {errors.password && touched.password ? <div className="error">{errors.password}</div> : null }
            </div>
            <div className={styles.rowHalf}>
              <div className={styles.inputName}>Confirm Password * </div>
              <input
                className="input"
                type="password"
                name="cpassword"
                value={values.cpassword}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="off"
              />
              {errors.cpassword && touched.cpassword ? <div className="error">{errors.cpassword}</div> : null }
            </div>
          </div>

          <button
            className="btn"
            style={{
              backgroundColor: "var(--red)",
              height: "45px",
              borderRadius: "2px",
              width: "136px",
            }}
            type="submit"
          >
            Register
          </button>
     
        </form>
        <ToastContainer/>
      </div>
    </div>
  );
};

export default RegistrationForm;
