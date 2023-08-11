 
import LoginForm from "../components/LoginForm"; 
import SmallHeader from "../components/SmallHeader";
import '../index.css' 

const  Login: React.FC = ()=> {
  return (
    <>
     
      <SmallHeader mainRoot="Home" subRoot="Login" pageTitle="Login or Create an Account"/>
      <LoginForm/>
    
    </>
  )
}

export default Login
