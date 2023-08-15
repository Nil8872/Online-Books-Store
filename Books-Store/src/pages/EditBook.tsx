import React from 'react'
import PageTitle from '../components/PageTitle'
import BookForm from '../components/BookForm'
import { BookData } from '../context/CustomHook'

type EditBookProps ={
  book: BookData;
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>
}

const  EditBook : React.FC <EditBookProps> = ({book, setEditMode})  =>{
  return (
    <>
      <PageTitle pageTitle='Edit Book' />
      <BookForm mode='edit' book={book} setEditMode={setEditMode}/>
    </>
  )
}

export default EditBook
