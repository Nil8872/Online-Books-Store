import React,{ReactNode, useState, useEffect} from 'react'
import BookContext from './BookContext'
import {toast} from "react-toastify"
import { useLoading } from './CustomHook'
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
  const {setLoading} = useLoading();

  useEffect(()=>{
    getAllBooks();
  },[])


  const getAllBooks = async()=>{

    try {
  const options = {
    method : "GET",
    headers: {"Content-Type": "application/json"}
  }      
      const result = await fetch(`${import.meta.env.VITE_BASE_URL}/api/book/all`,options)
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
      setLoading(true);
      const result = await fetch(`${import.meta.env.VITE_BASE_URL}/api/book/?id=${id}`, {method:"DELETE"});
      const data = await result.json();
      if(data.success === true){
        toast.success(data.message, {theme: "colored"})
        getAllBooks();
      }
    } catch (error) {
      console.log(error);
    }
    finally{
      setLoading(false);
    }
  }

  const addBook = async(formData)=>{

     
    const options = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData), 
    };

    try {
      setLoading(true);
      const result = await fetch(`${import.meta.env.VITE_BASE_URL}/api/book`,options);
      const data = await result.json();
      if (data.success === true) {
        getAllBooks();
        toast.success(data.message, { theme: "colored" });
      }
      else{
        toast.error(data.message, { theme: "colored"})
      }
    
        
    } catch (error) {
      console.log(error);
      toast.error("something went wrong", { theme: "colored" });
     
    }
    finally{
      setLoading(false);
    }
  }
 const updateBook = async(id:string, updatedData:any) =>{
    try {
      setLoading(true)
       console.log(updatedData);
       const options = {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(updatedData)
       }
     const result =  await fetch(`${import.meta.env.VITE_BASE_URL}/api/book/${id}`, options )
     const data = await result.json();

     if(data.success === true) {
      toast.success(data.message, { theme: "colored" });
      getAllBooks();

     }
     else{
      toast.error(data.message, {theme:"colored"})
     }
      
    } catch (error) {
      toast.error("Something went wrong!");
      console.log(error);
    }
    finally{
      setLoading(false);
    }
 }

//  const getBookById = async(id:string) =>{}
  return (
    <BookContext.Provider value={{allBooks:books, getAllBooks, deleteBook, updateBook, addBook}}>
      {children}
    </BookContext.Provider>
  )
}

export default BookProvider
