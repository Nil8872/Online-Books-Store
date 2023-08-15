import {createContext} from 'react';

type CartData = {
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

type addCartType = {
    userId :string;
    bookId :string;
    quantity :number;
  }

type CartContextType = {
    allCarts : CartData[];
    getAllCarts : ()=>void;
    setAllCarts : React.Dispatch<React.SetStateAction<CartData[]>>;
    setCartCount : React.Dispatch<React.SetStateAction<number>>;
    addToCart : (cardData: addCartType)=> void;
    deleteCart : (cardId: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export default CartContext;