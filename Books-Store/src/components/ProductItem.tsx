import React from "react";
import "../index.css";
import styles from "../styles/productList.module.css";

type T = string;

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

 

const ProductItem: React.FC = () => {
  return (
    <div className="container">
      <div className="grid">
        {dataFromBackednd.map((item) => {
          return (
            <>
              <div className="grid-item">
                <img src={item} alt="Loading" className={styles.image} />
                <div className={styles.itemInfoBox}>
                  <div className={styles.productTitle}>Product Title</div>
                  <div className={styles.subTitle}>Lorem</div>
                  <div className={styles.subTitle}>

                
                  <div className="" style={{ marginTop: "15px" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consequuntur, fugit deserunt? Possimus reiciendis corrupti
                    harum laboriosam qui.
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "cetnter",
                      marginTop: "20px",
                      fontSize: "18px",
                    }}
                  >
                    <div style={{marginRight:"10px",}}>MRP</div>
                    <div style={{textDecoration: "line-through"}} >
                      &#8377; 
                    </div>
                    <div style={{textDecoration: "line-through"}}>1000</div>
                    <div className="mg-10" style={{ color: "green" }}>
                      20.00% OFF
                    </div>
                    
                  </div>
                  </div>
                  <div style={{ marginBottom: "20px" }}>&#8377; 800</div>
                  <button
                    className="btn"
                    style={{ width: "100%", height: "40px" }}
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default ProductItem;
