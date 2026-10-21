import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    books: [
        {id: 1, title: "Book 1", author: "Author 1", price: 10, quantity: 5},
        {id: 2, title: "Book 2", author: "Author 2", price: 15, quantity: 3},
        {id: 3, title: "Book 3", author: "Author 3", price: 20, quantity: 8},
    ]
}

const bookSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        deleteBook: (state, action) =>{
            const id = action.payload;
            console.log("Deleting book with id:", id);
            state.books = state.books.filter((book)=> book.id !== id);
        },
        updateBook: (state, action) =>{
           const {id,title,author,price,quantity} = action.payload;
           const existingBook = state.books.find((book)=> book.id == id);
           if(existingBook){
            existingBook.title = title;
            existingBook.author = author;
            existingBook.price = price;
            existingBook.quantity = quantity
           }
        },
        addBook: (state, action) => {
            state.books.push(action.payload);
        }

    },
});

export const { deleteBook, addBook, updateBook } = bookSlice.actions;

export default bookSlice.reducer;