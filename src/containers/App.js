import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
// conpoments
// import Poll from '../containers/Poll'
import Home from '../containers/Home'
import Modal from '../containers/Modal'

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(handleInitialData())
  }
  render() {
    return (
      <Router>
        <Fragment>
          <div>
            Xavier
          </div>
          <Home />
          <Route component={Home} exact path="/home" />
          <Route component={Modal} exact path="/" />
        </Fragment>
      </Router>
    )
  }
}
function mapStateToProps({ questions, users }) {
  return {
    idUsers: Object.values(users),
    idQuestions: questions,
  }
}
export default connect(mapStateToProps)(App)
