import React from 'react'
import "../index.css"
import styles from '../styles/productList.module.css'
import ProductItem from './ProductItem'


import { MdNavigateBefore } from "react-icons/md";
import { MdNavigateNext } from "react-icons/md";


const ProductList : React.FC = () => {
  return (
    <>
      <div className='container' style={{color:"#414141"}} >
         <div style={{display:"flex", justifyContent:"space-between", marginBottom:"30px"}}>
            <div className={styles.productName}>Product Name  - 14366 items</div>
            <div className={styles.sotrBy}>
                <span>Sort By </span>
                <select name="" id="" style={{height:"40px", width:"200px", fontSize:"20px"}}>
                    <option value="">a - z</option>
                    <option value="">z - a</option>
                </select>
            </div>
         </div>
      </div>
      <ProductItem/>
      <div style={{display:"flex", justifyContent:"center", marginTop:"40px", alignItems:"center", textAlign:"center", color:"#414141"}}>
      <div className='font-Bold' style={{fontWeight:"700", fontSize: "20px", cursor:"pointer", marginTop:"5px"}}><MdNavigateBefore/></div>
      <div className='mg-15 center active'>1</div>
      <div className='mg-15 center '>2</div>
      <div className='mg-15 center '>3</div>
      <div className='mg-15 center '>4</div>
      <div className='mg-15 center '>5</div>
      <div className='mg-15 center '>...</div>
      <div className='mg-15 center '>10</div>
      <div style={{fontSize:"20px", cursor:"pointer", marginTop:"5px"}}> <MdNavigateNext/></div>
      
      </div>
         
    </>
  )
}

export default ProductList
