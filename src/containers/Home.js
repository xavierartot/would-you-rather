import React, { Component } from 'react'
import { connect } from 'react-redux'
// import Poll from './Poll'
import Modal from '../containers/Modal'

class Home extends Component {
  render() {
    // const { users } = this.props
    return (
      <div className="Home">
        <h1>Home...</h1>
        <Modal buttonLabel="open" />
      </div>
    )
  }
}

export default connect()(Home)
