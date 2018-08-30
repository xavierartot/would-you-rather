import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Badge } from 'reactstrap'

class LeaderBoardList extends Component {
  render() {
    const {
      list, totalQuestion, background, color,
    } = this.props
    const l = Object.keys(list)
    // console.log(totalQuestion.length)
    return (
      <div className="LeaderBoardList">
        <Badge
          color={background}
          style={{ fontSize: '1rem', color: `${color} ` }}
        >
          { totalQuestion.length - l.length }
        </Badge>
      </div>
    )
  }
}
function mapStateToProps({ template }) {
  return {
    color: template.color,
    background: template.background,
  }
}
export default connect(mapStateToProps)(LeaderBoardList)
