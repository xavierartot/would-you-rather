import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Poll from '../containers/Poll'

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props

    dispatch(handleInitialData())
  }
  render() {
    console.log(this.props)
    { this.props.users }
    return (
      <Router>
        <Fragment>
          sddfs
        </Fragment>
      </Router>
    )
  }
}
function mapStateToProps({ users, questions }) {
  return {
    users,
    questions,
  }
}
export default connect(mapStateToProps)(App)
