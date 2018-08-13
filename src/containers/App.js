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
    return (
      <Router>
        <Fragment>
          <Route component={Poll} exact path="/" />
        </Fragment>
      </Router>
    )
  }
}
function matStatesToProps({ users }) {
  return {
    users,
  }
}
export default connect(matStatesToProps)(App)
