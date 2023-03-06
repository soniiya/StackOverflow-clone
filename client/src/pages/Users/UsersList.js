import React from 'react'
import {useSelector} from 'react-redux'
import User from './User.js'
import './Users.css'

function UsersList() {

  const users = useSelector(state => state.usersReducers)

  return (
    <div className='userList-container'>
      {
        users.map((user) =>(
          <User user={user} key={user._id} />
        ))
      }
    </div>
  )
}

export default UsersList