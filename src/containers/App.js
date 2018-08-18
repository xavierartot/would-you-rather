import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
// conpoments
// import Poll from '../containers/Poll'
import Home from '../containers/Home'
import Header from '../containers/Header'
import LeaderBoard from '../containers/LeaderBoard'
import Add from '../containers/Add'

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(handleInitialData())
  }
  render() {
    return (
      <Router>
        <Fragment>
          <Header />
          <Home />
          <Route component={Home} exact path="/" />
          <Route component={LeaderBoard} exact path="/leaderboard" />
          <Route component={Add} exact path="/add" />
        </Fragment>
      </Router>
    )
  }
}
export default connect()(App)
