import React from 'react'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import PageTitle from '../components/PageTitle'
import Footer from '../components/Footer'
import ProductList from '../components/ProductList'

const ProductListing : React.FC = ()=> {
  return (
    <>
      <Header/>
      <SearchBar/>
      <PageTitle pageTitle='Product Listing' />
      <ProductList/>
      <Footer/>
    </>
  )
}

export default ProductListing
