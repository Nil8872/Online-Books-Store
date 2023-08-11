import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Edit from "./pages/EditProduct";
import ProductListing from "./pages/ProductListing";
import CartPage from "./pages/CartPage";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";
import UpdateProfile from "./pages/UpdateProfile";
import { ToastContainer } from "react-toastify";
import Category from "./pages/Category";
import User from "./context/User";
import Book from "./pages/Book";

function App() {
  return (
    <>
    
      <Router>
        <User>
        <Header/>
        <ToastContainer/>
        <SearchBar/>
        <Routes> 
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/product" element={<Product />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/productlisting" element={<ProductListing />} />
          <Route path="/cartpage" element={<CartPage />} />
          <Route path="/category" element={<Category />} />
          <Route path="/book" element={<Book/>} />
          <Route path="/update-profile" element={<UpdateProfile/>} /> 
        </Routes>
        <Footer/>
      </User>
      </Router>

       
    </>
  );
}

export default App;
