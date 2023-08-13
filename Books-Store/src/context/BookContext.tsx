import React from 'react';

type BookData = {
    bookName: string;
    _id: string;
    description: string;
    category: string;
    image: string;
    price: number;
  }

  type BookContextType = {
    allBooks: BookData[];
    // ... other potential methods or properties for the context
    getAllBooks?: () => void;
    
    deleteBook?:(id:string) => void;
    updateBook?:(id:string, updatedData) => void;
    getBookById?: (id:string) => BookData;
    addBook?:(book:BookData) => void;
  }

 
const BookContext = React.createContext<BookContextType | undefined>(undefined);

export default BookContext;