 
import RegistrationForm from "../components/RegistrationForm"; 
import SmallHeader from "../components/SmallHeader";
import { ToastContainer } from 'react-toastify';
 
import '../index.css'
 
function Register() {
  return (
    <>
       
      <ToastContainer/>
      
      <SmallHeader mainRoot="Home" subRoot="Create an Account" pageTitle="Login or Create an Account" />
      <RegistrationForm mode="register" />
      
     </>
  )
}

export default Register
