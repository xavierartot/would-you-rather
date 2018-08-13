import React from 'react'

const Users = ({ users }) => (
  <div className="Users">
    { users.map((i, user) => (
      <li key={user.id}>
        <img alt={user.id} src="{user.avatarURL}" />
        <span>{user.name}</span>
      </li>
    )) }
  </div>
)
export default Users
