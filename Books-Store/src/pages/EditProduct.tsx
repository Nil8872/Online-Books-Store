import React from 'react'
 
import PageTitle from '../components/PageTitle' 
import EditProductForm from '../components/EditProductForm'

const EditProduct : React.FC =  () =>{
  return (
    <>
      
      <PageTitle pageTitle='Edit Product' />
      <EditProductForm/>
  
    </>
  )
}

export default EditProduct
