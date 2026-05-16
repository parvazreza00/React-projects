import React, { useEffect, useState } from 'react'

const UseEffectExample = () => {
  const [count, setCount] = useState(0)

  useEffect(()=> {
    console.log("useEffect");
  }, []);

  return (
    <div>
      {console.log("rendering")}
      <h2>UseEffect Example</h2>
      <h2>Count : {count}</h2>
      <button onClick={()=> setCount(count=> count + 1)}>+</button>
      
    </div>
  )
}

export default UseEffectExample
