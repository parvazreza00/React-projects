import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./features/bookSlice";

const book = configureStore({
    reducer: {
        booksR: bookReducer
    }
});

export default book;