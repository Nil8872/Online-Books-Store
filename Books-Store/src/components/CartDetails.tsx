import React from "react";
import "../index.css";
import styles from "../styles/cart.module.css";
import Cart from "./Cart";

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
  return (
     
      <div className="container">
        <div style={{ marginTop: "75px" }}>
          <div className="row-column center">
            <div className={styles.cardTopHeading}>
              <div>
                My Shoping Bag <span>(</span> <span>item {dataFromBackednd.length}</span> <span>)</span>
              </div>
              <div>
                Total Price : <span>3000</span>
              </div>
            </div>

            {dataFromBackednd.map((cartDetails:string)=>{ 
               
         return (
                <>
                <Cart cartDetails={ cartDetails} />
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
