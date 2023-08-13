import React from 'react'
import PageTitle from '../components/PageTitle'
import BookForm from '../components/BookForm'

const  EditBook : React.FC = ({book, setEditMode})  =>{
  return (
    <>
      <PageTitle pageTitle='Edit Book' />
      <BookForm mode='edit' book={book} setEditMode={setEditMode}/>
    </>
  )
}

export default EditBook
