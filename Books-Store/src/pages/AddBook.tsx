import React from 'react'
 
import PageTitle from '../components/PageTitle' 
import BookForm from '../components/BookForm'
import { BookData } from '../context/CustomHook'

const book:BookData = {
  bookName: "",
  _id: "",
  description: "",
  category: "",
  image: "",
  price: 0
}

const AddBook : React.FC =  () =>{
  
  return (
    <>
      
      <PageTitle pageTitle='Add Book' />
      <BookForm mode="add" book={book} />
  
    </>
  )
}

export default AddBook
