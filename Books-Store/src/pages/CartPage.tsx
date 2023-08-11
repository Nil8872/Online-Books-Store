import React from 'react' 
import PageTitle from '../components/PageTitle'
import CartDetails from '../components/CartDetails'

const CartPage: React.FC = ()=> {
  return (
    <>
       
      <PageTitle pageTitle='Cart Page' />
      <CartDetails/>
   
    </>
  )
}

export default CartPage
