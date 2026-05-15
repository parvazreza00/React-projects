import React, { useState } from 'react'

const Faq = ({id, title, des}) => {
    const [toggle, setToggle] = useState(false)
  return (
    <div className='card bg-secondary-subtle w-75 m-auto mb-2 shadow'>
        <div className='card-body d-flex justify-content-between '>
            <h5>{id}. {title}</h5>
            <span className='fw-bolder fs-3' style={{'marginTop':'-15px', 'cursor':'pointer'}} onClick={()=>setToggle(!toggle)}>
                {
                   toggle ? <span className="text-danger">-</span> : "+"
                }
                </span>
        </div>
        {toggle && <p className="ms-3">{des}</p>}
        
      
    </div>
  )
}

export default Faq
