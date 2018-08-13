import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
// conpoments
import Poll from '../containers/Poll'
import Home from '../containers/Home'

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
          <div>
            Xavier
          </div>
          <Route>
            <Route component={Home} exact path="/" />
          </Route>
        </Fragment>
      </Router>
    )
  }
}
function mapStateToProps({ users, questions }) {
  return {
    users,
  }
}
export default connect(mapStateToProps)(App)
