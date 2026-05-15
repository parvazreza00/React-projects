import React, { useState } from 'react'

const Toggle = () => {

    const [toggle , setToggle] = useState(true)

    const handleClick = () => {        
        setToggle(!toggle);
    }

  return (
    <div className='container'>
        
        {toggle && (
            <div className='bg-warning'>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, tempore, sapiente aperiam officia molestiae autem consectetur perspiciatis et animi saepe omnis recusandae assumenda! Itaque, expedita magni. Quisquam nulla est quam repudiandae sed at enim perspiciatis asperiores vero officia praesentium ea obcaecati explicabo placeat error, quas dolore ipsam ratione id ipsa sequi quaerat eaque deserunt quos. Eveniet at ex dolorem consequatur possimus expedita deserunt eaque sed. Fuga eligendi modi excepturi reiciendis neque eum libero repellendus mollitia animi alias iure, ut cupiditate molestias. Odio pariatur architecto, facilis eligendi possimus molestias vitae corrupti ullam voluptate dolores corporis nemo ratione ducimus eveniet aspernatur. Autem?</p>
        </div>
        )}

        <div className='text-center'>
            <button className='btn btn-primary' onClick={()=> setToggle(!toggle)}>
                {
                    toggle ? "Hide" : "Show"
                }
                </button>
        </div>
      
    </div>
  )
}

export default Toggle
