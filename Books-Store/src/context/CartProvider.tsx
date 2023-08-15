import React,{ReactNode, useState, useEffect} from 'react'
import CartContext from './CartContext'
import {toast} from "react-toastify"

type CartProviderProps = {
    children : ReactNode
}

 type addCartType = {
  userId :string;
  bookId :string;
  quantity :number;
}

export type CartData = {
    _id : string;
    userId : string;
    bookId : string;
    quantity : number;
    book: {
        _id : string;
        bookName : string;
        price: number;
        category: string;
        description: string;
        categoryId : string;
        image: string;
    }
}

const  CartProvider: React.FC<CartProviderProps> = ({children}) => {

    const [allCarts, setAllCarts] = useState<CartData[]>([]);
    // const [cartCount, setCartCount ] = useState<number>(0);

    const [user, setUser] = useState(() => {
      const savedUser = localStorage.getItem('user');
      return savedUser ? JSON.parse(savedUser) : null;
  });
  
    

    window.addEventListener('storage', function(e) { 
      if (e.key === 'user') {

        setUser(JSON.parse(String(e.newValue)));
      }
    });
    

    const getAllCarts = async () => {

      if(user.roleId !== 0){

          const result =  await fetch(`${import.meta.env.VITE_BASE_URL}/api/cart/?userId=${user._id}`, {method: 'GET'})
          const data = await result.json();

          if(data.success ===true){
              setAllCarts(data.result); 
            }
        }
         
    }

    useEffect(()=>{
        getAllCarts();
    })


    const addToCart = async (cartData:addCartType) => {

      const options = {
        method: "POST", 
        headers : {"content-type": "application/json"},
        body: JSON.stringify(cartData)
      }

      try {
        
        const result  = await fetch(`${import.meta.env.VITE_BASE_URL}/api/cart`, options);
        const data = await result.json();
        if(data.success ===true){
          toast.success(data.message, {theme: "colored"});
          getAllCarts();
        }
        else{
          toast.error(data.message);
        }
      } catch (error) {
        toast.error("Something went wrong");
      }
    }
      
    const deleteCart = async (cartId:string) =>{

      try {
        
      
      const result = await fetch(`${import.meta.env.VITE_BASE_URL}/api/cart?cartId=${cartId}`, {method: "DELETE"});
      const data = await result.json();

      if(data.success === true){
        toast.error(data.message, {theme:"colored"});
        getAllCarts();
      }
      else{
        toast.error(data.message, {theme:"colored"})
      }
    } catch (error) {
        toast.error("Something went wrong!", {theme:"colored"});
    }
    } 

  return (
    <CartContext.Provider value={{allCarts,getAllCarts, setAllCarts, addToCart, deleteCart}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
