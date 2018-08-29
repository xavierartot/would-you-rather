import React, { Component, Fragment } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
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
import Modal from '../containers/Modal'

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
    if (this.props.authedUser === null) { // user is not logged launch the modal
      return <Modal buttonLabel="open" />
    }
    return (
      <Router>
        <Fragment>
          <Header />
          <Switch>
            <Route component={LeaderBoard} path="/leaderboard" />
            <Route component={Home} exact path="/" />
            <Route component={Add} path="/add" />
            <Route component={Poll} path="/questions/:id" />
            <Route component={PageNotFound} />
          </Switch>
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps({ template, authedUser }, props) {
  // console.log(template.color, template.background)
  return {
    color: template.color,
    background: template.background,
    authedUser,
  }
}
export default connect(mapStateToProps)(App)
