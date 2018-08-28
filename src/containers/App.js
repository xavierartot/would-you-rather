import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import { handleTemplate } from '../actions/template'
import templateBootstrap from '../utils/template'
// conpoments
import Poll from '../containers/Poll'
import Home from '../containers/Home'
import Header from '../containers/Header'
import LeaderBoard from '../containers/LeaderBoard'
import Add from '../containers/Add'
import PageNotFound from '../components/PageNotFound'

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(handleInitialData())
  }
  render() {
    // login id === nulll in handleInitialData()
    if (this.props.color === undefined) {
      this.props.dispatch(handleTemplate(templateBootstrap()))
    }
    return (
      <Router>
        <Fragment>
          <Header />
          <div>
            <Route component={LeaderBoard} path="/leaderboard" />
            <Route component={Home} exact path="/" />
            <Route component={Add} path="/add" />
            <Route component={Poll} path="/questions/:id" />
            <Route component={PageNotFound} path="*" />
          </div>
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps({ template }, props) {
  return {
    color: template.color,
    background: template.background,
  }
}
export default connect(mapStateToProps)(App)
