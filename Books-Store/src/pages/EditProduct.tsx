import React from 'react'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import PageTitle from '../components/PageTitle'
import Footer from '../components/Footer'
import EditProductForm from '../components/EditProductForm'

const EditProduct : React.FC =  () =>{
  return (
    <>
      <Header/>
      <SearchBar/>
      <PageTitle pageTitle='Edit Product' />
      <EditProductForm/>
      <Footer/>
    </>
  )
}

export default EditProduct
