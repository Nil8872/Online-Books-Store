import Footer from "../components/Footer";
import Header from "../components/Header";
import LoginForm from "../components/LoginForm";
import SearchBar from "../components/SearchBar";
import SmallHeader from "../components/SmallHeader";
import '../index.css' 

function Login() {
  return (
    <>
      <Header />
      <SearchBar/>
      <SmallHeader mainRoot="Home" subRoot="Login" pageTitle="Login or Create an Account"/>
      <LoginForm/>
      <Footer/>
    </>
  )
}

export default Login
