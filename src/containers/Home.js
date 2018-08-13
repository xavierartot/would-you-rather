import React, { Component } from 'react'
import { connect } from 'react-redux'
import Poll from './Poll'

class Home extends Component {
  // const { users } = this.props
  render() {
    console.log(this.props)
    return (
      <div className="Home">
        <h1>Home</h1>
      </div>
    )
  }
}

function mapStateToProps({ users }) {
  return { // got the ids as Props
    users,
  }
}
export default connect(mapStateToProps)(Home)
