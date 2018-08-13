import React, { Component } from 'react'
import { connect } from 'react-redux'
import Poll from './Poll'
import Users from '../conpoments/Users'

class Home extends Component {
  render() {
    console.log(this.props.users)
    const { users } = this.props
    return (
      <div className="Home">
        <h1>Home...</h1>
      </div>
    )
  }
}

function mapStateToProps({ users, test }) {
  return { // got the ids as Props
    users,
  }
}
export default connect(mapStateToProps)(Home)
