import React, { Component } from 'react'

class Add extends Component {
  state = {
    text: '',
  }
  handleSubmit = (e) => { // submit button
    e.preventDefault()
    const { text } = this.state
    // const { dispatch, id } = this.props

    // console.log(id)
    // todo: Add Tweet to Store
    // dispatch(handleAddTweet(text, id))

    console.log('New Tweet', text)

    this.setState(() => ({
      text: '',
    }))
  }
  render() {
    const { text } = this.state
    console.log(this.props)
    return (
      <div className="Add">
        <h3 className="center">Compose new Tweet</h3>
        <form
          className="new-tweet"
          onSubmit={this.handleSubmit}
        >
          <input
            className="text"
            onChange={this.handleChange}
            placeholder="first question"
            value={text}
          />
          <button
            className="btn"
            disabled={text === ''}
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    )
  }
}
export default Add
