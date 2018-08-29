import React, { Component } from 'react'

class LeaderBoardList extends Component {
  render() {
    const { list, totalQuestion } = this.props
    const l = Object.keys(list)
    // console.log(totalQuestion.length)
    return (
      <div className="LeaderBoardList">
        { totalQuestion.length - l.length }
      </div>
    )
  }
}
export default LeaderBoardList
