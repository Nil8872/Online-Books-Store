import React from 'react' 
import PageTitle from '../components/PageTitle' 
import ProductList from '../components/ProductList'

const ProductListing : React.FC = ()=> {
  return (
    <>
      <PageTitle pageTitle='Product Listing' />
      <ProductList/>
    </>
  )
}

export default ProductListing
