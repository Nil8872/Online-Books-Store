import React from "react";
import "../index.css";
import styles from "../styles/productList.module.css";
import { useBooks } from "../context/CustomHook";

 

 

const ProductItem: React.FC = () => {

  const {allBooks} = useBooks(); 
  return (
    <div className="container">
      <div className="grid">
        {allBooks.map((book) => {
          return (
            
              <div className="grid-item" key={book._id}>
                <img src={`http://localhost:5000/${book.image}`} alt="Loading" className={styles.image} />
                <div className={styles.itemInfoBox}>
                  <div className={styles.productTitle}>{(book.bookName).substring(0, 15)}{(book.bookName).length>15? "..." : null}</div>
                  <div className={styles.subTitle}>{book.category}</div>
                  <div className={styles.subTitle}>

                
                  <div className="" style={{ marginTop: "15px", height:"40px" }}>
                    {(book.description).substring(0, 55)}{book.description.length>55? "..." : null}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "cetnter",
                      marginTop: "20px",
                      fontSize: "18px",
                    }}
                  >
                    {/* <div style={{marginRight:"10px",}}>MRP</div> */}
                    {/* <div style={{textDecoration: "line-through"}} >
                      &#8377; 
                    </div> */}
                    {/* <div style={{textDecoration: "line-through"}}>{book.price}</div>
                    <div className="mg-10" style={{ color: "green" }}>
                      20.00% OFF
                    </div> */}
                    
                  </div>
                  </div>
                  <div style={{ marginBottom: "20px" }}>MRP &#8377;  {book.price}</div>
                  <button
                    className="btn"
                    style={{ width: "100%", height: "40px" }}
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            
          );
        })}
      </div>
    </div>
  );
};

export default ProductItem;
