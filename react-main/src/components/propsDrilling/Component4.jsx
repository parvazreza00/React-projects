import React, { useContext } from 'react'
import { userContext } from './UserContex'

const Component4 = () => {
    const data = useContext(userContext);
    const {user, text} = data;
  return (
    <div>

        <h2>{text}</h2>
        <h3>Id: {user.id}</h3>
        <h3>Name : {user.name}</h3>
      
    </div>
  )
}

export default Component4
