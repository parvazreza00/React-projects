import React from 'react'
import User from './User'
import { useUsersCrudContext } from './Hooks/useUsersCrudContext';

const Users = () => {
    const {users} = useUsersCrudContext();
  return (
    <div className='container mt-3'>
      <div className="row g-3">
        {users.map((user) => <User key={user.id} user={user} />)}
      </div>
    </div>
  )
}

export default Users
