import React from "react";
 
import PageTitle from "../components/PageTitle"; 
import "../index.css";
import ProductDRUD from "../components/UserCRUD";

import { MdNavigateBefore } from "react-icons/md";
import { MdNavigateNext } from "react-icons/md";

const Product: React.FC = () => {
  return (
    <>
       
      <PageTitle pageTitle="Product Page" />

      <div className="container">
        <div style={{ display: "flex", justifyContent: "right" }}>
          <input
            type="text"
            className="input"
            placeholder="Search..."
            style={{ height: "40px", marginRight: "10px", width: "28%" }}
          />
          <button
            className="btn"
            style={{ width: "200px", height: "40px", borderRadius: "2px" }}
          >
            Add Product
          </button>
        </div>

        <ProductDRUD />

        <div
          style={{
            display: "flex",
            justifyContent: "right",
            marginTop: "28px",
            fontSize: "14px",
            color:"#212121" 
          }}
        >
          <div style={{display:"flex", justifyContent:"space-around", alignItems:"center",width: "25%", marginRight:"30px"}}>

          <span>Row per page: </span>
           <select name="" id="" style={{padding:"10px", fontSize:"16px", cursor:"pointer"}}>
          <option value="" style={{fontSize:"16px"}}>1</option>
          <option value="">2</option>
          <option value="">3</option>
          <option value="">4</option>
          <option value="">5</option>
          <option value="">6</option>
        </select>

        <div> 1-5 of 6</div>
        <div style={{fontWeight:"bold", fontSize: "20px", cursor:"pointer"}}><MdNavigateBefore/></div>
        <div style={{fontSize:"20px", cursor:"pointer"}}> <MdNavigateNext/></div>
         
        </div>
        </div>
      </div>
       
    </>
  );
};

export default Product;
