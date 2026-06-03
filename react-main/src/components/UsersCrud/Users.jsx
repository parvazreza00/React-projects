import React, { useContext } from 'react'
import User from './User'
import { CrudUsersContext } from './ContextAPI/UsersContext'

const Users = () => {
    const {users} = useContext(CrudUsersContext);
  return (
    <div className='container mt-3'>
      <div className="row g-3">
        {users.map((user) => <User key={user.id} user={user} />)}
      </div>
    </div>
  )
}

export default Users
