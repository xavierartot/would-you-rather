import React from 'react'

const Users = ({ users }) => (
  <div className="users">
    { users.map(user => (
      <li key={user.id} className="">
        <img alt={user.id} className="img-thumbnail" src={user.avatarURL} />
        <span>{user.name}</span>
      </li>
    )) }
  </div>
)
export default Users
