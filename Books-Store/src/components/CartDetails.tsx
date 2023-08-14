import React, { useContext } from "react";
import "../index.css";
import styles from "../styles/cart.module.css";
import Cart from "./Cart";
import { UserContext } from "../context/User";
import { useCarts } from "../context/CustomHook";

// type T = string | number;
type T = string ;

const dataFromBackednd: Array<T> = [
  "../assets/product1.jpg",
  "../assets/product2.jpg",
  "../assets/product3.jpg",
  "../assets/product4.jpg",
  "../assets/product4.jpg",
  "../assets/product5.jpg",
  "../assets/product10.jpg",
  "../assets/product7.jpg",
  "../assets/product7.jpg",
  "../assets/product8.jpg",
];




const CartDetails: React.FC = () => {

  const {allCarts} =  useCarts();

  const calculateTotalPrice = (allCarts)=>{
    let total = 0;

    allCarts.forEach( cart =>{
      total += cart?.book?.price;
    })

    return total;
  }

  return (
     
      <div className="container">
        <div style={{ marginTop: "75px" }}>
          <div className="row-column center">
            <div className={styles.cardTopHeading}>
              <div>
                My Shoping Bag <span>(</span> <span>item {allCarts.length}</span> <span>)</span>
              </div>
              <div>
                Total Price : <span>{calculateTotalPrice(allCarts)}</span>
              </div>
            </div>

            {allCarts.map((cart)=>{ 
               
         return (
                <>
                <Cart cartDetails={cart} />
                </>
              )
            })}

            
            <div style={{width:"585.2px"}}>
              <button className="btn" style={{width:"139.75px", height:"40px", borderRadius:"2px", marginTop:"5px"}}>Place Order</button>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default CartDetails;
