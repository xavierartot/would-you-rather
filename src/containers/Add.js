import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPoll } from '../actions/addPoll'
import { addQuestion } from '../actions/users'
import { generateUID } from '../utils/_DATA'


class Add extends Component {
  state = {
    optionTwo: 'x',
    optionOne: 'a',
  }
  handleSubmit = (e) => { // submit button
    e.preventDefault()
    const { optionOne, optionTwo } = this.state
    const { authedUser, dispatch } = this.props
    const idGenerated = generateUID()// id generate
    console.log(optionOne, optionTwo, authedUser, idGenerated)
    dispatch(addPoll(authedUser, optionOne, optionTwo, idGenerated))
    dispatch(addQuestion(authedUser, idGenerated))
  }
  handleOptionTwo = (event) => {
    event.preventDefault()
    console.log(event.target.value)
    this.setState({ optionTwo: event.target.value })
  }
  handleOptionOne = (event) => {
    event.preventDefault()
    console.log(event.target.value)
    this.setState({ optionOne: event.target.value })
  }
  render() {
    return (
      <div className="Add">
        <h3 className="center">Would You Rather</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="OptionOne">Option One</label>
            <input
              aria-describedby="OptionOne"
              className="form-control"
              id="OptionOne"
              onChange={this.handleOptionOne}
              placeholder="Option One"
              type="text"
              value={this.state.optionOne}
            />
          </div>
          <div className="form-group">
            <label htmlFor="OptionTwo">Option Two</label>
            <input
              className="form-control"
              id="OptionTwo"
              onChange={this.handleOptionTwo}
              placeholder="Option Two"
              type="text"
              value={this.state.optionTwo}
            />
          </div>
          <button className="btn btn-darked" type="submit">Submit</button>
        </form>
      </div>
    )
  }
}
function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  }
}
export default connect(mapStateToProps)(Add)
