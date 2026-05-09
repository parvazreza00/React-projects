import react from 'react'
import './App.css'

import Home from './components/Todos/Home'

function App() {
  

  return (
    <>
     <div className='container'>
      <h1 className="text-white text-center" style={{ 'backgroundColor': 'green' }}>React ToDo app</h1>

      <Home />



     </div>
    </>
  )
}

export default App
