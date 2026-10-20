import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset,increaseByAmount } from './counterSlice';

const CounterView = () => {
    const count = useSelector((state) => state.counter.count);
    // console.log(count);
    const dispatch = useDispatch();

  return (
    <div>
    <h3>Counter : {count}</h3>
    <button onClick={()=>{dispatch(increment())}}>Increment</button>
    <button onClick={()=>{dispatch(decrement())}}>Decrement</button>
    <button onClick={()=>{dispatch(reset())}}>Reset</button>        
    <button onClick={()=>{dispatch(increaseByAmount(5))}}>IncreaseByValue</button>        
      
    </div>
  )
}

export default CounterView
