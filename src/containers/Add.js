import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Card, CardBody, CardHeader } from 'reactstrap'
import { handleAddPoll } from '../actions/shared'
// import { generateUID } from '../utils/_DATA'


class Add extends Component {
  state = {
    optionTwo: '',
    optionOne: '',
    redirectToHome: false,
    emptyFieldOptionOne: false,
    emptyFieldOptionTwo: false,
  }
  handleSubmit = (e) => { // submit button
    e.preventDefault()
    const { optionOne, optionTwo } = this.state
    const { authedUser, dispatch } = this.props
    // const idGenerated = generateUID()// id generate by the DB
    if (optionOne && optionTwo) {
      dispatch(handleAddPoll(authedUser, optionOne, optionTwo))
      this.setState(() => ({
        redirectToHome: true, // new tweet is by itslef or using in Dashboard
      }))
    } else {
      this.setState(() => ({
        redirectToHome: false, // new tweet is by itslef or using in Dashboard
      }))
      console.error('error: empty fields')
    }
  }
  handleOptionOne = (event) => {
    const value = event.target.value
    // console.log(value)
    if (value === '') {
      this.setState({ optionOne: value })
      return this.setState({ emptyFieldOptionOne: true })
    }
    this.setState({
      optionOne: value,
      emptyFieldOptionOne: false,
    })
  }
  handleOptionTwo = (event) => {
    const value = event.target.value
    // console.log(value)
    if (value === '') {
      this.setState({ optionTwo: value })
      return this.setState({ emptyFieldOptionTwo: true })
    }
    this.setState({
      optionTwo: value,
      emptyFieldOptionTwo: false,
    })
  }
  render() {
    const { background  } = this.props
    console.log( this.props )
    if (this.state.redirectToHome) {
      return <Redirect to="/" />
    }
    return (
      <div className="d-flex justify-content-center">
        <Card className="d-flex flex-column mb-3 shadow rounded" style={{width: '340px'}}>
          <CardHeader><h3 className="center">Would You Rather</h3></CardHeader>
          <CardBody className="d-flex flex-row justify-content-between">
            <form onSubmit={this.handleSubmit} style={{ width: '100%'}}>
              <div className="form-group">
                <label htmlFor="OptionOne">Option One</label>
                <input
                  aria-describedby="OptionOne"
                  className="form-control"
                  id="optionOne"
                  onChange={this.handleOptionOne}
                  placeholder="Option One"
                  type="text"
                  value={this.state.optionOne}
                />
                { this.state.emptyFieldOptionOne && (
                  <small className="form-text text-danger" id="OptionOne">
                    the field can't be empty
                  </small>)
                }
              </div>
              <div className="form-group">
                <label htmlFor="optionTwo">Option Two</label>
                <input
                  aria-describedby="OptionTwo"
                  className="form-control"
                  id="optionTwo"
                  onChange={this.handleOptionTwo}
                  placeholder="Option Two"
                  type="text"
                  value={this.state.optionTwo}
                />
                { this.state.emptyFieldOptionTwo && (<small className="form-text text-danger" id="OptionTwo">
                  the field can't be empty
                </small>)
                }
              </div>
              <button className={`btn btn-${background}`} type="submit">Submit</button>
          </form></CardBody>
        </Card>

      </div>
    )
  }
}
function mapStateToProps({ authedUser, template }) {
  return {
    authedUser,
    background: template.background,
  }
}
export default connect(mapStateToProps)(Add)
