import React, { useState } from 'react'
import BookList from './components/BookList'
import BookForm from './components/BookForm'

const App = () => {
// send fetchin book into this form for update
  const [bookToEdit, setBookToEdit] = useState(null);
  // fetching book
  const hadleEdit = (book)=>{
    setBookToEdit(book);
  }
  const onhandleCancelEdit = (book)=>{
    setBookToEdit(null);
  }
 
  return (
    <div>
      <BookForm bookToEdit={bookToEdit} onCancel={onhandleCancelEdit}/>
      <BookList onHandleEdit={hadleEdit}/>

      
    </div>
  )
}

export default App
