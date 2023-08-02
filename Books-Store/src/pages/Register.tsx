import Footer from "../components/Footer";
import Header from "../components/Header";
import RegistrationForm from "../components/RegistrationForm";
import SearchBar from "../components/SearchBar";
import SmallHeader from "../components/SmallHeader";
 
import '../index.css'
 
function Register() {
  return (
    <>
      <Header />
      <SearchBar/>
      <SmallHeader mainRoot="Home" subRoot="Create an Account" pageTitle="Login or Create an Account" />
      <RegistrationForm/>
      <Footer/>
    </>
  )
}

export default Register
