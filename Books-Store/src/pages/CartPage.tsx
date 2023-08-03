import React from 'react'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import Footer from '../components/Footer'
import PageTitle from '../components/PageTitle'
import CartDetails from '../components/CartDetails'

const CartPage: React.FC = ()=> {
  return (
    <>
      <Header/>
      <SearchBar/>
      <PageTitle pageTitle='Cart Page' />
      <CartDetails/>
      <Footer/>
    </>
  )
}

export default CartPage
