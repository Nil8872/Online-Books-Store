import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Edit from "./pages/EditProduct";
import ProductListing from "./pages/ProductListing";

function App() {
  return (
    <>
      <Router>
        <Routes> 
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/product" element={<Product />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/productlisting" element={<ProductListing />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
