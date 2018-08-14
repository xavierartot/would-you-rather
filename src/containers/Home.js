import React, { Component } from 'react'
import { connect } from 'react-redux'
// import Poll from './Poll'
import Modal from '../containers/Modal'

class Home extends Component {
  render() {
    console.log(this.props.authedUser)
    // const { users } = this.props
    return (
      <div className="Home">
        <h1>Home...</h1>
        { this.props.authedUser === null
        ? <Modal buttonLabel="open" />
        : null
        }
      </div>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  }
}
export default connect(mapStateToProps)(Home)
