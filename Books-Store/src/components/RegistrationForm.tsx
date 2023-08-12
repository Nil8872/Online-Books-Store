import "../index.css"; 
import styles from "../styles/loginOrReg.module.css";
import btnStyles from "../styles/header.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";   
import 'react-toastify/dist/ReactToastify.css';
 import {Role} from "../utils/enum.js"; 
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/Auth.js";


type RegisterData = {
      firstName: string;
      lastName: string;
      email: string;
      password: string;
      cpassword: string;
      roleId : number;
    };
 
const validationSchema =  Yup.object({
  firstName: Yup.string().required("Please enter first name"),
  lastName: Yup.string().required("Please enter last name"),
  email: Yup.string().email().required("Please enter your email address"),
  password: Yup.string().min(8,"password should be minimum 8 number | character").required("Please enter your password"),
  cpassword: Yup.string().min(8, "password should be minimum 8 character").required("Please enter your confirm password")
  .oneOf([Yup.ref("password")], "password must match"),
  roleId : Yup.number().required("Please select role")

})

const RegistrationForm: React.FC <{mode: string}> = ({mode}) => {
   
  const navigate = useNavigate();

  let user = localStorage.getItem("user");
  if(user){
    user = JSON.parse(user); 
  }else{
    navigate("/login");
  } 
  const {register} = useAuth();

  
  const endPoint : string = mode === "register" ? "createuser" : "updateuser";
  const navigateString : string = mode === "register" ? "/login" : "/";
  const Method : string = mode === "register" ? "POST" : "PUT";
  
  console.log(user);

  
  const initialValues: RegisterData =  {
    firstName: mode === "register" ? "": user.firstName,
    lastName: mode === "register" ? "": user.lastName,
    email:  mode === "register" ? "": user.email,
    password: "",
    cpassword: "",
    roleId : mode === "register"?  Role.Seller : user?.roleId ,
  } 

  const { values,
    handleSubmit, 
    handleChange,
    handleBlur,
    touched,
    errors 
  } = useFormik({
    initialValues,
    onSubmit: async(values: RegisterData) => {
       
      
         values = {...values, roleId: parseInt(values.roleId)}
         
        register(values,endPoint, Method,navigateString);
     
      
    },
     validationSchema,
    
  });// onReset: (e: React.FormEvent<HTMLFormElement>) => {},

  return (
    <div className="container"> 
      <div className={styles.mainForm}>
        <p className={styles.title}>Personal Information</p>
        {
          mode === "register" ?  <p className={styles.info}>
          Please enter the following information to create your account
        </p>: <div style={{marginBottom: "10px"}}>

        </div>
        }

      </div>

      <div className={styles.inputeFields} >
        <form action="" method="post" onSubmit={handleSubmit}>
          <div className="row" style={{ marginBottom: "40px"}}>
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


          <div className="row" style={{ marginBottom: "40px"}}>
            <div className={styles.rowHalf}>
              <div className={styles.inputName}>Email*</div>
              <div style={{display:"flex", flexDirection:"column"}}>

              </div>
              <input
                className="input"
                type="email"
                name="email"
                value={mode==="update"?  values.email = user?.email:  values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={mode === "update"}
              />
            {errors.email && touched.email ? <div className="error">{errors.email}</div> : null }
            </div>
            <div className={styles.rowHalf}>
              <div className={styles.inputName}>Last Name*</div>
              <select name="roleId" className="input" value={values.roleId} onChange={handleChange}>
                <option   style={{fontSize:"16px"}} value={Role.Seller}>Seller</option>
                <option style={{fontSize: "16px"}} value={Role.Buyer}>Buyer</option>
              </select>
               
              {errors.roleId && touched.roleId ? <div className="error">{errors.roleId}</div> : null }
            </div>
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
        {mode === "register" &&
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
        }
        {
          mode === "update" && 
          <div style={{display:'flex'}}>
          <div >
          <button  type="submit" className={`btn ${btnStyles.searchBtn}`} style={{background:"green", borderRadius:'5px', width:"136px", height:"40px", marginRight:"10px"}} > Save </button>

        </div>
        <div>

          <button className="btn" style={{backgroundColor:'var(--red)', borderRadius:"5px", width:"136px", height:"40px"}} >Cancle</button>
        </div>
          </div>
          
        }
        </form> 
      </div>
    </div>
  );
};

export default RegistrationForm;
