import React from 'react';
import {BookData} from "./CustomHook"
 

  type BookContextType = {
    allBooks: BookData[]; 
    getAllBooks?: () => void;
    
    deleteBook?:(id:string) => void;
    updateBook?:(id:string, updatBedData:any) => void;
    getBookById?: (id:string) => BookData;
    addBook?:(book:BookData) => void;
  }

 
const BookContext = React.createContext<BookContextType | undefined>({
  allBooks : [],
  deleteBook : ()=>{console.warn("deleteBook not implemented")},

});

export default BookContext;