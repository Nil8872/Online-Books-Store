import React,{useState} from 'react'
import { useBooks } from '../context/CustomHook'
import "../index.css"
import { useNavigate } from 'react-router-dom';
import EditBook from '../pages/EditBook';
import PageTitle from './PageTitle';
import { BookData } from '../context/CustomHook';

const  BookCRUD : React.FC = () => {

  const [editMode, setEditMode] = useState<boolean>(false);
  const [selectedBook, setSelectedBook] = useState<BookData|null>(null);


  const {allBooks, deleteBook} = useBooks();
  const navigate = useNavigate();

 
  const handoleEditBook = (book: BookData) =>{
    setSelectedBook(book);
    setEditMode(true);
  }


  return (
    <>
    {editMode && selectedBook ? <EditBook book={selectedBook} setEditMode={setEditMode}/> : 

    (<>
    <PageTitle pageTitle='Book Page' />
    <div className="container" style={{ marginTop: "32px", boxSizing: "border-box" }}>

<div style={{ display: "flex", justifyContent: "right", marginBottom: "20px" }}>
   
  <input
    type="text"
    className="input"
    name="categoryname"
    placeholder="Search book By name && category"
    // onChange={handleChange}
    // value={categoryName}
    style={{ height: "40px", marginRight: "10px", width: "28%" }}
  />
  <button
    className="btn"
    style={{ width: "200px", height: "40px", borderRadius: "2px" }}
    onClick={() => navigate("/book-add")}
  >
    Add Product
  </button>
</div>
<table>
  <thead>
    <tr style={{ paddingBottom: "20px", margin: "20px" }}>
      <th style={{ width: "30%" }}>Book Name</th>
      <th style={{ width: "20%" }}>Price</th>
      <th style={{ width: "20%" }}>Category</th>
      <th style={{ width: "20%" }}> </th>
      <th style={{ width: "0.1%" }}></th>
      <th style={{ width: "0.1%" }}></th>
    </tr>
  </thead>
  <tbody>
    {allBooks &&
      allBooks.map((book) => { 
        return (
            <tr key={book._id}>
              <td>{book.bookName}</td>
              <td>{book.price}</td>
              <td>{book.category}</td>
              <td></td>
              <td>
                <button
                  className="btn"
                  style={{
                    backgroundColor: "white",
                    border: "2px solid green",
                    color: "green",
                    marginRight: "10px",
                  }}
                  onClick={()=> handoleEditBook(book)}
                >
                  Edit
                </button>
              </td>
              <td>
                <button
                  className="btn"
                  style={{
                     
                    backgroundColor: "white",
                    border: "2px solid var(--red)",
                    color: "var(--red)",
                  }}
                   
                //   disabled={user.roleId === 1}
                  onClick={()=> deleteBook && deleteBook(book._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
        )
        })}
                
              
  </tbody>
</table>
</div>
    </>)}
       
     
    </>
  )
}

export default BookCRUD
