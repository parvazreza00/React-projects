import React, { useEffect, useState } from 'react'
import { nanoid } from "nanoid";
import { useDispatch } from 'react-redux';
import { addBook, updateBook } from '../features/bookSlice';

const BookForm = ({bookToEdit, onCancel}) => {
    const [book, setBook] = useState({
        title:"",
        author:"",
        price:'',
        quantity:''

    });

    // update book
    useEffect(()=>{
        if(bookToEdit){
            setBook(bookToEdit);
        }

    }, [bookToEdit]);

    const dispatch = useDispatch();

    const handleChange = (event)=> {
        const {name, value} = event.target
        setBook((prebook) => ({...prebook, [name]:value}));
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        if(bookToEdit){
        // update the exist data
            dispatch(updateBook(book))
        }else{
          dispatch(addBook({...book, id: nanoid()}));
        }

        setBook({
            title:"",
            author:"",
            price:'',
            quantity:''
        })
        
    }
   
  return (
    <div>
        <form onSubmit={handleSubmit}>           
            <input type="text"  name="title" placeholder="Book Title" value={book.title} onChange={handleChange}/>
            <input type="text"  name="author" placeholder="Author" value={book.author} onChange={handleChange}/>
            <input type="number"  name="price" placeholder="Price" value={book.price} onChange={handleChange}/>
            <input type="number"  name="quantity" placeholder="Quantity" value={book.quantity} onChange={handleChange}/>
            <button type="submit">
                {
                bookToEdit? "Update Book": "Add Book"
                }
                </button>
                {bookToEdit && <button onClick={onCancel}>Cancel</button>}
        </form>      
    </div>
  )
}

export default BookForm
