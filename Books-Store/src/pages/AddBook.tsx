import React from 'react'
 
import PageTitle from '../components/PageTitle' 
import AddBookFrom from '../components/BookForm'

const AddBook : React.FC =  () =>{
  return (
    <>
      
      <PageTitle pageTitle='Add Book' />
      <AddBookFrom mode="add" />
  
    </>
  )
}

export default AddBook
