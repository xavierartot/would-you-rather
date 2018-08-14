import React, { Component } from 'react'
import { connect } from 'react-redux'
// import Poll from './Poll'
// import Users from '../conpoments/Users'

class Home extends Component {
  render() {
    console.log(this.props.users)
    const { users } = this.props
    console.log(users)
    return (
      <div className="Home">
        <h1>Home...</h1>
        {users.map(user => (
          <li key={user.id}>{user.id}</li>
        ))}

      </div>
    )
  }
}

function mapStateToProps({ users }) {
  return {
    users: Object.values(users),
  }
}
export default connect(mapStateToProps)(Home)
