import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteBook } from "../features/bookSlice";

const BookList = ({onHandleEdit}) => {
  const books = useSelector((state) => state.booksR.books);

  const dispatch = useDispatch();

  const handleDelete = (id) =>{
    // console.log("Deleting book with id:", id);
    dispatch(deleteBook(id));
  }
  const handleEdit = (book) =>{
    onHandleEdit(book);
  }

  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {books && books.length > 0 ? (
          books.map((book) => {            
            return (
              <li key={book.id}>
                Book {book.title} - Author {book.author} - $ {book.price} -{" "}
                {book.quantity} pcs
                <button onClick={()=>{handleDelete(book.id)}}> Delete </button> 
                <button onClick={()=>{handleEdit(book)}}>Edit</button>             </li>
            );
          })
        ) : (
          <p>No books available.</p>
        )}
      </ul>
    </div>
  );
};

export default BookList;
