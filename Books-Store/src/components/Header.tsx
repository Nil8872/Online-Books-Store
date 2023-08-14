import style from "../styles/header.module.css";
import "../index.css";
import tatvaLogo from "../assets/tatvaLogo.png";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Button from '@mui/material/Button'; 
import { MdShoppingCart } from "react-icons/md";
import React,{useState, useContext} from 'react'
import shared from "../utils/shared.js"
import { UserContext } from "../context/User.js";
import { useCarts } from "../context/CustomHook.js";


const initialValue = {
  
    firstName: "",
 lastName : "",
 roleId : 0,
 _id: 1,
 email: ""
}

const  Header: React.FC =()=> { 

  const navigate = useNavigate();
  const {_setUser} = useContext(UserContext);
  const {allCarts,setAllCarts} = useCarts();

const items = shared.NavigationItems
  const [cartCount, setCartCount] = useState(0);  


 const hanldeLogout = ()=>{
    localStorage.setItem("user", JSON.stringify(initialValue))
    setAllCarts([]);
    _setUser(initialValue)
    navigate("/");
 }
   

let realUser;
  const user = localStorage.getItem("user") 
  if(!user){
    realUser = {
      firstName: "",
    lastName : "",
    roleId : 0  ,
    _id: 1,
    email: "",
    }
  }
  else{
     realUser = JSON.parse(user);

  }


  const hadleCartClick = () => {
     
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
            <Link className={style.headerRightItemLink} to="/">Home</Link>
          </div>


          {

            !(realUser?.roleId) && <>

          <div className={style.headerRightItem}>
            <span style={{ color: "#888282" }}>|</span>
          </div>
                <div className={style.headerRightItem}>
              <Link className={style.headerRightItemLink} to="/login">Login</Link>
            </div>


            <div className={style.headerRightItem}>
              <span style={{ color: "#888282" }}>|</span>
            </div>

            <div className={style.headerRightItem}>
              <Link className={style.headerRightItemLink} to="/register">Register</Link>
            </div>
            </>
          }  
            {
              items.map((item) =>{ 
                return (
                   <React.Fragment key={item.route}>
                   {
                    shared.hasAccess(item.route, realUser) && (
                      <>

                     { <div className={style.headerRightItem} key={item.name}>
                      <span style={{ color: "#888282" }}>|</span>
                    </div>}
                    <div className={style.headerRightItem}>
                      <Link className={style.headerRightItemLink} to={item.route}>{item.name}</Link>
                    </div>

                      </>
                    )
                   }

                  </React.Fragment>
                )
              })
            }
            
            
             <Button color="secondary" onClick={hadleCartClick} variant="outlined" startIcon={<MdShoppingCart color="var(--red)"/>}>
              <span style={{marginRight: "3px", color:"var(--red)"}}> {allCarts?.length || 0} </span>
        Cart
      </Button>
      {realUser.roleId ? <Button sx={{marginLeft: "10px"}} color="error" variant="contained" onClick={hanldeLogout} >Logout</Button>:null}
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
