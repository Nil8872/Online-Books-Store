
import {useContext} from "react";
import { CategoryContext } from "./CategoryContext";
import BookContext from "./BookContext";
import CartContext from "./CartContext";


export type BookData = {
    bookName: string;
    _id: string;
    description: string;
    category: string;
    image: string;
    price: number;
  }

  type BookContextType = {
    allBooks: BookData[]; 
    getAllBooks?: () => void;
    deleteBook?:(id:string) => void;
    updateBook?:(id:string, updatedData:any) => void;
    getBookById?: (id:string) => BookData;
    addBook?:(book : any) => void;
  }

  type Category = {
    name:string;
    _id : string;
  }

  type CategroryContextType = {
    categories : Category[],
    deleteCategory : (id:string)=>void;
    updateCategory : (id:string, name:string)=>void;
    addCategory : (name:string)=>void;
  }

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
    addToCart : (cardData: addCartType)=> void;
    deleteCart : (cardId: string) => void;
}

 
export const useCategory = () : CategroryContextType =>{
    const context = useContext(CategoryContext);
    if(!context){
        throw new Error("useBooks must be used within a CategoryContext")
    }
    return context;
}

 

export const useBooks=() : BookContextType  => {
    const context = useContext(BookContext);
    if (!context) {
      throw new Error('useBooks must be used within a BookProvider');
    }
    return context;
  }
  

 
 
export const useCarts = (): CartContextType =>{
    const contex = useContext(CartContext);
    if(!contex) {
        throw new Error("useBooks must be used within a Cart Provider")
    }
    return contex
}
