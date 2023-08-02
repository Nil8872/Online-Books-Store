import React from 'react';
import styles from "../styles/header.module.css"


const  PageTitle : React.FC<{pageTitle:string}> = ({pageTitle}) =>{
  return (
    <>
       <div className={styles.pageTitle} style={{margin: "50px 0px 25px 0px"}}>
          <p className={styles.titleStyle}>{pageTitle}</p>
    </div>
    </>
  )
}

export default PageTitle
