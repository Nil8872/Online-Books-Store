
import {useContext} from "react";
import { CategoryContext } from "./CategoryContext";
import BookContext from "./BookContext";
import CartContext from "./CartContext";

export const useCategory = () =>{
    return  useContext(CategoryContext);

}

export const useBooks = () =>{
    return useContext(BookContext);
}

export const useCarts = ()=>{
    return useContext(CartContext);
}
 

