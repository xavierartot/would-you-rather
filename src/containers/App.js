import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
// conpoments
// import Poll from '../containers/Poll'
import Home from '../containers/Home'
import Header from '../containers/Header'

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(handleInitialData())
  }
  render() {
    // console.log(this.props.questionsUnAnswered)
    // console.log(this.props.questionsAnswered)
    return (
      <Router>
        <Fragment>
          <Header />
          <Home />
          <Route component={Home} exact path="/" />
        </Fragment>
      </Router>
    )
  }
}
export default connect()(App)
