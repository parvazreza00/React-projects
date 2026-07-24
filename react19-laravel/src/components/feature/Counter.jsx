import React, { useState } from 'react'

export const Counter = () => {
    const [count, setCount] = useState(0);
    // let count = 0;
    const increment = () => {
        // count +=1 ;
        setCount(count + 1);
        
    }
    console.log(count);
  return (
    <>

    <h1>Counter : {count}</h1>
    <button onClick={increment}>Increment</button>
      
    </>

  )
}

// export default Counter
