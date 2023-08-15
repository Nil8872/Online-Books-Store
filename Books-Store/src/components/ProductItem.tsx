import React from "react";
import "../index.css";
import styles from "../styles/productList.module.css";
import { useBooks, useCarts } from "../context/CustomHook";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { UserData } from "../context/User";

 

 

const ProductItem: React.FC = () => {

  const {allBooks} = useBooks(); 
  const {addToCart} = useCarts();
  const user = localStorage.getItem("user");
  const navigate = useNavigate();
  let realUser: UserData;
  if(user){
    realUser = JSON.parse(user);
  }

  const handleAddToCart = (bookId: string) =>{
    if(realUser.roleId === 0){
      toast.error("Please Login first!", {theme:"colored"})
      navigate("/login");
    }else{
      console.log(bookId);
      const cartData = {userId : realUser?._id, bookId, quantity: 1};
      addToCart(cartData);
    }
  }
  return (
    <div className="container">
      <div className="grid">
        {allBooks.map((book) => {
          return (
            
              <div className="grid-item" key={book._id}>
                <img src={`${import.meta.env.VITE_BASE_URL}/${book.image}`} alt="Loading" className={styles.image} />
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
                   
                  </div>
                  </div>
                  <div style={{ marginBottom: "20px" }}>MRP &#8377;  {book.price}</div>
                  <button
                    className="btn"
                    onClick={()=>handleAddToCart(book._id)}
                    type="button"
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
