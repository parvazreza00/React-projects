import React, { act, useReducer, useState } from "react";

import { reducer } from "./reducer";

const bookData = [
  { id: 1, name: "Panter Panchal", price: 100 },
  { id: 2, name: "Padma Nadir Majhi", price: 200 },
  { id: 3, name: "Srikanto", price: 300 },
];

const Modal = ({ modalText }) => {
  return <p>{modalText}</p>;
};


const initialState =  {
    books: bookData,
    isModalOpen: false,
    modalText: "",
  }
const UseReducer = () => {
  // const [books, setBooks] = useState(bookState);
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [modalText, setModalText] = useState("");
  const [ bookState  , dispatch] = useReducer(reducer,initialState);

  const [bookName, setBookName] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
     const newBook = { id: new Date().getTime().toString(), name: bookName };
    dispatch({type: "ADD", payload:newBook});
    setBookName("");
    // setBooks((prevState) => {
    //   const newBook = { id: new Date().getTime().toString(), name: bookName };
    //   return [...prevState, newBook];
    // });
    // setIsModalOpen(true);
    // setModalText("Book is Added the list!");
  };

  const removeBook = (id)=>{
    dispatch({type:"REMOVE", payload:id});
  }

  return (
    <div>
      <h1>Book List</h1>

      <form action="" onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Book Name"
          value={bookName}
          onChange={(e) => setBookName(e.target.value)}
        />
        <button type="submit">Add Book</button>
      </form>

      {bookState.isModalOpen && <Modal modalText={bookState.modalText} />}

      {bookState.books.map((book) => {
        const { id, name } = book;
        return <li key={id}>{name} <button onClick={()=>{removeBook(id)}}>Remove</button> </li>;
      })}
    </div>
  );
};

export default UseReducer;
