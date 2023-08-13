
import {useContext} from "react";
import { CategoryContext } from "./CategoryContext";
import BookContext from "./BookContext";

export const useCategory = () =>{
    return  useContext(CategoryContext);

}

export const useBooks = () =>{
    return useContext(BookContext);
}

 

