import React, { Component } from 'react'
import { connect } from 'react-redux'
// import Poll from './Poll'
// import Users from '../conpoments/Users'

class Home extends Component {
  render() {
    console.log(this.props.users)
    // const { users } = this.props
    const listUser = 'map empty'
    // listUser = users.map(item => <li key={item.id}>{item}</li>)

    return (
      <div className="Home">
        <h1>Home...</h1>
        {listUser}
      </div>
    )
  }
}

function mapStateToProps({ users }) {
  return {
    users,
  }
}
export default connect(mapStateToProps)(Home)
