import style from "../styles/header.module.css";
import "../index.css";
import tatvaLogo from "../assets/tatvaLogo.png";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Button from '@mui/material/Button'; 
import { MdShoppingCart } from "react-icons/md";
import {useState} from 'react'


function Header() {

  const [cartCount, setCartCount] = useState(0);
 const navigate = useNavigate();
  const hadleCartClick = () => {
    console.log("Clicked to cart");  
    navigate("/cartpage");
    //  return <Navigate to="/" replace={true} />;
  }
  
  return (
    <>
      <div className={style.headerLine}></div>
      <div className="container">
        <div className={style.header}>
          <div className={style.logoItems}>
            <div className={style.logo}>
              <img src={tatvaLogo} alt="Loading..." />
            </div>
          </div>
          <div className={style.headerRight}>
            <div className={style.headerRightItem}>
              <Link className={style.headerRightItemLink} to="/login">Login</Link>
            </div>
            <div className={style.headerRightItem}>
              <span style={{ color: "black" }}>|</span>
            </div>
            <div className={style.headerRightItem}>
              <Link className={style.headerRightItemLink} to="/register">Register</Link>
            </div>
            
             <Button color="secondary" onClick={hadleCartClick} variant="outlined" startIcon={<MdShoppingCart color="var(--red)"/>}>
              <span style={{marginRight: "3px", color:"var(--red)"}}> {cartCount} </span>
        Cart
      </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
