import React,{useState} from 'react';
import "../index.css";
import styles from "../styles/cart.module.css";
import { useCarts } from '../context/CustomHook';


 

const Cart :  React.FC = ({cartDetails}) =>{
 
  const [itemCount, setItemCount] = useState(cartDetails?.quantity);
  const {deleteCart} = useCarts();

  const handleRemoveItem = (cartId:string) => {
     deleteCart(cartId);
  }
  return (
    <>
      <div className={styles.card}>
              <div className={styles.imageBox}>
                <img src={`http://localhost:5000/${cartDetails?.book?.image}`} alt="Loading" height={"100%"} width={"100%"} />
              </div>
              <div className={styles.cardContent}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "10px",
                  }}
                >
                  <div>{cartDetails?.book?.bookName}</div>
                  <div>{cartDetails?.book?.price}</div>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    color: "var(--red)",
                    marginBottom: "15px",
                  }}
                >
                  <div>Cart item name</div>
                  <div>
                    <span
                      style={{
                        textDecoration: "line-through",
                        color: "#414141",
                      }}
                    >
                      1000
                    </span>{" "}
                    50% off
                  </div>
                </div>

                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    <button
                    onClick={()=> setItemCount((c:number)=>c-1)}
                    disabled={itemCount === 0}
                      className="btn"
                      style={{
                        background: itemCount === 0? "black": "var(--red)",
                        height: "20px",
                        width: "20px",
                        borderRadius: "2px",
                      }}
                    >
                      -
                    </button>
                    <button
                      className="btn"
                      style={{
                        height: "20px",
                        width: "20px",
                        borderRadius: "2px",
                        margin: "0px 10px",
                      }}
                    >
                      {itemCount}
                    </button>
                    <button
                      onClick={()=>setItemCount((c:number)=>c+1)}
                      className="btn"
                      style={{
                        height: "20px",
                        width: "20px",
                        borderRadius: "2px",
                      }}
                    >
                      +
                    </button>
                  </div>
                  <div style={{ color: "var(--red)", cursor:"pointer" }} onClick={() => handleRemoveItem(cartDetails?._id)}>Remove</div>
                </div>
              </div>
            </div>
    </>
  )
}

export default Cart
