import React,{ReactNode, useState, useEffect} from 'react'
import BookContext from './BookContext'
import {toast} from "react-toastify"
type BookProps ={
    children: ReactNode
}

type BookData = {
  bookName: string;
  _id: string;
  description: string;
  category: string;
  image: string;
  price: number;
}

const BookProvider: React.FC <BookProps> = ({children}) => {

  const [books, setBooks] = useState<BookData[]>([]);


  useEffect(()=>{
    getAllBooks();
  },[])


  const getAllBooks = async()=>{

    try {
  const options = {
    method : "GET",
    headers: {"Content-Type": "application/json"}
  }      
      const result = await fetch(`${import.meta.env.VITE_BASE_URL}/book/all`,options)
    const data = await result.json();

    if(data.success === true) {
      setBooks(data.books)
    }

    } catch (error) {
      console.log(error);
    }
    
    
    
  }

  const deleteBook = async(id:string)=>{

    try {
      const result = await fetch(`${import.meta.env.VITE_BASE_URL}/book/?id=${id}`, {method:"DELETE"});
      const data = await result.json();
      if(data.success === true){
        toast.success(data.message, {theme: "colored"})
        getAllBooks();
      }
    } catch (error) {
      console.log(error);
    }
  }

  const addBook = async(formData)=>{

    const options = {
      method: "POST",
      body: formData,
    };

    try {
      const result = await fetch(`${import.meta.env.VITE_BASE_URL}/book`,options);
      const data = await result.json();
      if (data.success === true) {
        getAllBooks();
        toast.success(data.message, { theme: "colored" });
        return true;
        
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  }
 const updateBook = async(id:string, updatedData) =>{
    try {
      
       console.log(updatedData);
     const result =  await fetch(`${import.meta.env.VITE_BASE_URL}/book/${id}`, {method : "PUT", body: updatedData} )
     const data = await result.json();

     if(data.success === true) {
      toast.success(data.message, { theme: "colored" });
      getAllBooks();

     }
      
    } catch (error) {
      console.log(error);
    }
 }

 const getBookById = async(id:string) =>{}
  return (
    <BookContext.Provider value={{allBooks:books, getAllBooks, deleteBook, updateBook, addBook}}>
      {children}
    </BookContext.Provider>
  )
}

export default BookProvider
