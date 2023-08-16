import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Product from "./pages/Product";
import AddBook from "./pages/AddBook";
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
import UserPage from "./pages/UserPage";
import CategoryProvider from "./context/CategoryContext";
import BookProvider from "./context/BookProvider"
import CartProvider from "./context/CartProvider";
import GlobalLoadingProvider from "./context/GlobalLoadingProvider";
import GlobalLoader from "./components/GlobalLoader";


// import EditBook from "./pages/EditBook";
function App() {
  return (
    <>
      <Router>
        <GlobalLoadingProvider>
          <GlobalLoader/>
        <User>
          <BookProvider>
          <CategoryProvider>
            <CartProvider>
            <Header />
            <ToastContainer />
            <SearchBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/product" element={<Product />} />
              <Route path="/book-add" element={<AddBook />} />
              {/* <Route path="/book-edit" element={<EditBook />} /> */}
              <Route path="/productlisting" element={<ProductListing />} />
              <Route path="/cartpage" element={<CartPage />} />
              <Route path="/category" element={<Category />} />
              <Route path="/book" element={<Book />} />
              <Route path="/update-profile" element={<UpdateProfile />} />
              <Route path="/user" element={<UserPage />} />
            </Routes>
            <Footer />
            </CartProvider>
          </CategoryProvider>
          </BookProvider>
        </User>
        </GlobalLoadingProvider>
      </Router>
    </>
  );
}

export default App;
